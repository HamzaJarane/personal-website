import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import CustomCursor from './components/Cursor';
import bgImage from '@/assets/images/bg.jpg';
import TopBar from './components/TopBar';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import '@/App.css';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { Loading } from './components/Loading';
import { Layout } from './components/Layout';

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
      <Toaster 
        position={"bottom-right"} 
        toastOptions={{
          style: {
            background: '#000',
            color: '#fff',
            border: '1px solid #fff',
            padding: '16px',
            fontSize: '16px',
            minWidth: '300px',
            borderRadius: '0',
          }
        }}
      />
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}