import tw from 'twin.macro';
import { lazy, Suspense } from 'react';

const Experience = lazy(() => import('@/components/Work/Experience'));
const WorkComponent = lazy(() => import('@/components/Work/Work'));
const OpenSource = lazy(() => import('@/components/Work/OpenSource'));

export default function Work() {
  return (
    <div css={tw`flex flex-col px-7 sm:px-40`}>
      <Experience />
      <WorkComponent />
      <OpenSource />
    </div>
  );
}