import tw from 'twin.macro';
import { lazy, Suspense } from 'react';
import '@/App.css';

const Profile = lazy(() => import('@/components/Profile'));
const Card = lazy(() => import('@/components/Card'));
const SideBar = lazy(() => import('@/components/SideBar'));

export default function App() {
  return (
    <div className='home' css={tw`lg:flex grid text-white bg-black h-screen w-screen transition-all ease-in-out duration-300`}>
      <Suspense
        fallback={
          <div css={tw`h-screen w-screen flex justify-center items-center`}>
            <div className="loader" />
          </div>
        }
      >
        <Profile />
        <Card />
      </Suspense>
    </div>
  );
}
