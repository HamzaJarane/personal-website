import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import tw from 'twin.macro';
import '@/App.css';
import './i18n';
import SideBar from './components/SideBar';
import { LanguageProvider } from './contexts/LanguageContext';

export const Layout = ({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) => {
  return (
    <>
      {spaceTop && (
        <div css={tw`lg:hidden h-2`} />
      )}
      <div css={[
          tw`lg:flex grid text-white bg-black`,
          !ignoreBlock && tw`h-screen w-screen`,
        ]}>
        <div css={tw`lg:w-[58px]`} />
        <SideBar />
        {children || <Outlet />}
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
          path="*" 
          element={
            <div>404</div>
          } 
        />
      </Route>
    )
  );

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
