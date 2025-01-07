import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import '@/App.css';
import './i18n';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div css={tw`lg:flex grid text-white bg-black h-screen w-screen`}>
      {children || <Outlet />}
    </div>
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
        <Route path='blog/:slug' element={<BlogPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}
