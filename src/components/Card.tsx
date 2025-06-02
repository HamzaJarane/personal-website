import tw from 'twin.macro';

import Experience from '@/components/Cards/Experience';
import Work from '@/components/Cards/Work';
import OpenSource from '@/components/Cards/OpenSource';
import BlogPosts from './Cards/BlogPosts';
import Ticker from './Ticker';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

const LanguagesAndFrameworks = lazy(() => import('@/components/Cards/LanguagesAndFrameworks'));
const AboutMe = lazy(() => import('@/components/Cards/AboutMe'));

function Card() {
    return (
        <>
            <AboutMe />
            <LanguagesAndFrameworks />
            
            {/* <div css={tw`w-full p-3 lg:px-32 lg:py-1 lg:h-full`}>   
                <AboutMe />
                <Experience />
                <Work />
            </div> */}
            {/* <Ticker content='CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME.' />
            <div css={tw`w-full p-3 lg:px-32 lg:py-1 lg:h-full`}>
                <OpenSource />
                <BlogPosts />
            </div>
            <Ticker content='CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME. CONTACT ME.' /> */}
        </>
    )
}

export default Card;