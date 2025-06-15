import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import bgImage from '@/assets/images/bg.jpg';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import '@/App.css';
import TopBar from './TopBar';
import Footer from './Footer';

export const Layout = ({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) => {
    const location = useLocation();
    const pageVariants: Variants = {
        initial: {
            scale: 0.8,
            border: "10px solid white",
            borderRadius: "0.75rem",
            height: "100vh",
            width: "100vw",
        },
        animate: {
            scale: 1,
            border: "none",
            borderRadius: "0",
        },
        exit: {
            scale: 0.8,
            border: "10px solid white",
            borderRadius: "0.75rem",
            height: "100vh",
            width: "100vw",
        }
    };

    const pageTransition: Transition = {
        duration: 0.7,
        ease: "easeInOut",
        scale: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
            enter: { duration: 0.1 },
        }
    };

    return (
        <>
            {spaceTop && (
                <div css={tw`lg:hidden h-2`} />
            )}
            <div
                css={[
                    tw`grid text-white`,
                    !ignoreBlock && tw`h-screen w-screen`,
                ]}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className='page-content'
                        css={tw`text-white bg-black overflow-auto`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <TopBar />
                        {children || <Outlet />}
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};