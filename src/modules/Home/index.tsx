import tw from 'twin.macro';
import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('@/components/Home/Hero'));

export default function App() {
  return (
    <div css={tw`flex flex-col justify-between gap-9`}>
      <Hero />
    </div>
  );
}