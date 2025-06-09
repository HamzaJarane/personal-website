import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import tw from 'twin.macro'
import styled from 'styled-components';
import { css } from 'styled-components';
import { motion } from 'framer-motion';

function TopBar() {

  return (
    <div
      css={tw`flex justify-between p-2`}
    >
      <PageButton path={'/'} name={'HOME'} />
      <PageButton path={'/blog'} name={'BLOG'} />
      <PageButton path={'/work'} name={'WORK'} />
      <PageButton path={'/contact'} name={'CONTACT'} />
    </div>
  )
};

const baseStyles = css`
  ${tw`relative cursor-pointer`}
  font-size: 1.5rem;
  font-family: 'Oswald';
  &:after {
    content: '';
    ${tw`absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300`}
  }
  &:hover:after {
    ${tw`w-full`}
  }
`;

const LinkElement = styled(motion.a)`${baseStyles}`;
const ReactLink = styled(motion(Link))`${baseStyles}`;

const PageButton = ({ name, path }: { name: string, path: string }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const characterAnimation = {
    rest: {
      y: 0,
      transition: {
        duration: 0.1
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.1,
        staggerChildren: 0.03,
        ease: "easeOut"
      }
    }
  };

  const letterAnimation = {
    rest: {
      y: 0
    },
    hover: {
      y: [-2, -5, -2],
      transition: {
        duration: 0.3
      }
    }
  };

  const AnimatedText = () => (
    <motion.span
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={characterAnimation}
    >
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    path.startsWith('/') ? (
      <ReactLink to={path} variants={item}>
        <AnimatedText />
      </ReactLink>
    ) : (
      <LinkElement href={path} variants={item}>
        <AnimatedText />
      </LinkElement>
    )
  );
}

export default TopBar;