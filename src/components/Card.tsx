import React from 'react'
import tw from 'twin.macro';

import AboutMe from '@/components/Cards/AboutMe';
import Experience from '@/components/Cards/Experience';
import Work from '@/components/Cards/Work';

function Card() {
    return (
        <div css={tw`w-full p-3 sm:p-0 sm:w-[70%] sm:h-screen sm:overflow-y-auto`}>
            <AboutMe />
            <Experience />
            <Work />
        </div>
    )
}

export default Card;