import tw from 'twin.macro';
import { useEffect, useRef } from "react";
import { lazy, Suspense } from 'react';
import '@/App.css'

const Profile = lazy(() => import('@/components/Profile'));
const Card = lazy(() => import('@/components/Card'));

export default function App() {

  return (
    <div css={tw`lg:flex grid text-white bg-black w-screen`}>
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
