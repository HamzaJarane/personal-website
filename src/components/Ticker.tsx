import tw from "twin.macro";
import { motion } from "framer-motion";
import './Ticker.css';
import { useState, ReactNode } from "react";
import { CSSProp } from "styled-components";

const TickerContainer = motion(tw.div`
  w-full
  bg-white
  overflow-hidden
  whitespace-nowrap
  border-b-[1px]
  transition-all
`);

const TickerContent = tw.div`
  inline-block
  animate-ticker
  text-9xl
  text-black
  cursor-pointer
`;

const ExpandedContent = motion(tw.div`
  w-full
  h-full
  whitespace-normal
  overflow-y-auto
`);

interface TickerProps {
    content: string;
    children: ReactNode;
    css?: CSSProp;
}

export default function Ticker({ content, children, css }: TickerProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <TickerContainer
            animate={{
                height: isExpanded ? "100vh" : "9rem",
                ...(isExpanded ? {
                    position: 'fixed',
                    top: 0
                } : {})
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
            css={css}
        >
            <TickerContent onClick={() => setIsExpanded(!isExpanded)} id="ticker-content">
                {content}
            </TickerContent>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isExpanded && <ExpandedContent>{children}</ExpandedContent>}
            </motion.div>
        </TickerContainer>
    );
};