import React, { lazy } from "react";
import tw from "twin.macro";

const AboutMe = lazy(() => import('@/components/Home/AboutMe'));

const HightLightText = ({ children }: { children: React.ReactNode }) => {
    return <span css={tw`text-white underline font-[Oswald]`}>{children}</span>;
}

export default function Hero() {
    return (
        <>
            <div css={tw` text-[#ffffffd7]`}>
                <div css={tw`text-white text-center text-[15em]`}>
                    <div>H<span css={tw`font-[Yellowtail]`}>ello</span>!</div>
                </div>
            </div>
            <AboutMe />
            <div css={tw`lg:p-[3.75rem] text-[#ffffffd7]`}>
                <p css={tw`text-4xl mb-12 indent-[50vw]`}>
                    In <HightLightText>2020</HightLightText>, I began my career as a <HightLightText>Linux administrator</HightLightText>,
                    which ignited my passion for <HightLightText>DevOps</HightLightText> and <HightLightText>Web development</HightLightText>.
                    Now, as a <HightLightText>Software developer</HightLightText> with over two years of experience, I specialize in creating
                    user-friendly websites and web applications using modern technologies.
                </p>
                <div css={tw`pl-[50vw] text-xl`}>
                    I am comfortable with <HightLightText>TypeScript</HightLightText>, <HightLightText>JavaScript</HightLightText>, <HightLightText>Kotlin</HightLightText>,
                    and <HightLightText>PHP</HightLightText>. I have also spent lots of time building with frameworks like <HightLightText>Laravel</HightLightText>,{' '}
                    <HightLightText>Next.js</HightLightText>, <HightLightText>AdonisJS</HightLightText>, <HightLightText>React</HightLightText>, <HightLightText>Vue</HightLightText>, <HightLightText>NestJS</HightLightText>, and styling using <HightLightText>Tailwind CSS</HightLightText>.
                </div>
            </div>
        </>
    );
}