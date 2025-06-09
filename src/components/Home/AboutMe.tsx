import React, { useMemo, useRef } from 'react';
import tw, { css } from 'twin.macro';
import { motion, useInView } from 'framer-motion';
import styled from '@emotion/styled';
import Ticker from '@/components/Ticker';

export const TextHighlight = styled(motion.span)`
  ${tw`text-[120px] text-center font-bold block mb-6 text-black uppercase`}
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
`;

export const Container = tw.div`
  h-[90vh]
  overflow-y-auto
  snap-y
  snap-mandatory
  scroll-smooth
  relative
  p-6
`;

export const Section = styled(motion.section)`
  ${tw`
    h-[80vh]
    flex
    flex-col
    justify-center
    items-center
    snap-start
    relative
  `}
`;

export const ScrollButton = styled(motion.button)`
  ${tw`
    absolute
    bottom-8
    left-1/2
    transform
    -translate-x-1/2
    bg-black
    text-white
    px-6
    py-3
    rounded-full
    font-semibold
    hover:bg-gray-800
    transition-colors
  `}
`;

export const textVariants = {
  hidden: {
    opacity: 0,
    scale: 2, // 0.3
    rotate: 0, // -180
    y: 100
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, -0.05, 0.95],
      type: "spring",
      bounce: 0.4
    }
  }
};

function AboutMe() {
  const age = useMemo(() => {
    const today = new Date();
    const birth = new Date('2003-10-26');
    const monthDiff = today.getMonth() - birth.getMonth();

    let age = today.getFullYear() - birth.getFullYear();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }, []);

  return (
    <Ticker content='HAMZA. HAMZA. HAMZA. HAMZA. HAMZA. HAMZA. HAMZA. HAMZA. HAMZA. HAMZA.'>
      <Container>
        <Section>
          <TextHighlight
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            whileHover={{ scale: 1.05, color: '#0066ff' }}
          >
            hi, i'm <span id="hamza-name" css={tw`underline`}>hamza</span>.
          </TextHighlight>
        </Section>

        <Section>
          <TextHighlight
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            css={tw`!text-[80px]`}
            whileHover={{ scale: 1.05, color: '#0066ff' }}
          >
            i'm a {age} year old from morocco.
          </TextHighlight>
        </Section>

        <Section>
          <TextHighlight
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            css={tw`!text-[80px]`}
            whileHover={{ scale: 1.05, color: '#0066ff' }}
          >
            i'm a software developer.
          </TextHighlight>
        </Section>

        <Section css={tw`!h-[80vh]`}>
          <TextHighlight
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            css={tw`!text-[80px]`}
            whileHover={{ scale: 1.05, color: '#0066ff' }}
          >
            i create things in my free time.
          </TextHighlight>
        </Section>
      </Container>
    </Ticker>
  );
}

export default AboutMe;