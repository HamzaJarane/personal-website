import tw from 'twin.macro';
import { useEffect, useRef } from "react";
import { lazy, Suspense } from 'react';
import '@/App.css'

const Profile = lazy(() => import('@/components/Profile'));
const Card = lazy(() => import('@/components/Card'));

export default function App() {

  return (
    <div css={tw`sm:flex grid bg-black w-screen`}>
      <Suspense fallback={<pre>Working on it ...</pre>}>
        <Profile />
      </Suspense>

      <Suspense fallback={<pre>Working on it ...</pre>}>
        <Card />
      </Suspense>
    </div>
  );
}
