import React, { useRef } from 'react';
import tw, { css } from 'twin.macro';
import { motion, useInView } from 'framer-motion';
import styled from '@emotion/styled';
import Ticker from '../Ticker';
import { Container, Section, TextHighlight, textVariants } from './AboutMe';

function LanguagesAndFrameworks() {
    const scrollToNext = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Ticker content='LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS.'>
            <Container>

                <Section>
                    <TextHighlight
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                        css={tw`!text-[80px]`}
                        whileHover={{ scale: 1.05, color: '#0066ff' }}
                    >
                        i code in <span css={tw`underline`} id="language-ts">typescript</span>, <span css={tw`underline`} id="language-kotlin">kotlin</span>, <span css={tw`underline`} id="language-php">php</span> and im currently learning <span css={tw`underline`} id="language-csharp">c#</span>
                    </TextHighlight>
                </Section>

                <Section css={tw`!h-[93vh]`}>
                    <TextHighlight
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                        css={tw`!text-[80px]`}
                        whileHover={{ scale: 1.05, color: '#0066ff' }}
                    >
                        I use <span css={tw`underline`}>Laravel</span>, <span css={tw`underline`}>NextJS</span>, <span css={tw`underline`}>ReactJS</span>, <span css={tw`underline`}>VueJS</span>, <span css={tw`underline`}>NestJS</span>, <span css={tw`underline`}>AdonisJS</span>, <span css={tw`underline`}>Tailwind CSS</span>.
                    </TextHighlight>
                </Section>

            </Container>
        </Ticker>
    );
}

export default LanguagesAndFrameworks;