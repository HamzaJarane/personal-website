import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import CustomCursor from './components/Cursor';
import bgImage from '@/assets/images/bg.jpg';
import TopBar from './components/TopBar';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import '@/App.css';
import Footer from './components/Footer';

export const Layout = ({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) => {
  const location = useLocation();
  const pageVariants: Variants = {
    initial: {
      scale: 0.8,
      border: "10px solid white",
      borderRadius: "0.75rem",
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

export const Loading = () => {
  return (
    <div css={tw`h-screen w-screen flex justify-center items-center`}>
      <div className="loader" />
    </div>
  );
};

export const withKeepAlive = (Component: React.LazyExoticComponent<any>) => {
  return React.memo(() => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  ));
};

const Home = withKeepAlive(lazy(() => import('@/modules/Home')));
const Blog = withKeepAlive(lazy(() => import('@/modules/Blog')));
const Work = withKeepAlive(lazy(() => import('@/modules/Work')));
const Contact = withKeepAlive(lazy(() => import('@/modules/Contact')));
const BlogPage = withKeepAlive(lazy(() => import('@/modules/Blog/Page')));

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='blog'
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path='blog/:slug'
          element={
            <Layout spaceTop ignoreBlock>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path='work'
          element={
            <Layout spaceTop ignoreBlock>
              <Work />
            </Layout>
          }
        />
        <Route
          path='contact'
          element={
            <Layout spaceTop ignoreBlock>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <div css={tw`text-white text-center`}>404</div>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}