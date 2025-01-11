import tw from 'twin.macro';
import { lazy, Suspense } from 'react';
import '@/App.css';

const Profile = lazy(() => import('@/components/Profile'));
const Card = lazy(() => import('@/components/Card'));
const SideBar = lazy(() => import('@/components/SideBar'));

export default function App() {
  return (
    <div css={tw`lg:flex grid text-white bg-black h-screen w-screen`}>
      <Suspense
        fallback={
          <div css={tw`h-screen w-screen flex justify-center items-center`}>
            <div className="loader" />
          </div>
        }
      >
        <SideBar />
        <Profile />
        <Card />
      </Suspense>
    </div>
  );
}
