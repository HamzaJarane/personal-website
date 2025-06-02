import tw from 'twin.macro';
import { lazy, Suspense } from 'react';
import '@/App.css';

const Card = lazy(() => import('@/components/Card'));
const Loader = () => (
  <div css={tw`h-screen w-screen flex justify-center items-center`}>
    <div className="loader" />
  </div>
);

export default function App() {
  return (
    <div className='home' css={tw` text-white bg-black overflow-auto transition-all ease-in-out duration-300`}>
      <Suspense fallback={<Loader />}>
        <Card />
      </Suspense>
    </div>
  );
}