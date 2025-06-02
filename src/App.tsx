import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link, useLocation } from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import tw from 'twin.macro';
import SideBar from './components/SideBar';
import { LanguageProvider } from './contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import '@/App.css';
import './i18n';
import CustomCursor from './components/Cursor';

export const Layout = ({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) => {
  const [isInIframe, setIsInIframe] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    setIsInIframe(location.pathname.startsWith('/blog') && window.self !== window.top);
  }, [location]);
  
  return (
    <>
      {spaceTop && (
        <div css={tw`lg:hidden h-2`} />
      )}
      {isInIframe && (
          <div css={tw`text-white flex justify-center items-center p-3`}>
            <Link css={tw`text-xl font-semibold border rounded-full px-3 py-1 hover:bg-white hover:text-black`} to={'/blog'}>
              {t('nav.home')}
            </Link>
          </div>
      )}
      <div css={[
          tw`lg:flex grid text-white bg-black`,
          !ignoreBlock && tw`h-screen w-screen`,
        ]}>
        {!isInIframe && (
          <>
            <div css={tw`lg:w-[58px]`} />
            <SideBar />
          </>
        )}
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
      <CustomCursor />
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}