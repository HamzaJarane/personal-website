import tw from "twin.macro";
import { motion } from "framer-motion";
import './Ticker.css';
import { useState, ReactNode } from "react";

const TickerContainer = motion(tw.div`
  w-full
  bg-white
  overflow-hidden
  whitespace-nowrap
  border-b-[1px]
  border-b-black
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
}

export default function Ticker({ content, children }: TickerProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <TickerContainer
            animate={{
                height: isExpanded ? "100%" : "9rem",
            }}
            transition={{
                // type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            <TickerContent onClick={() => setIsExpanded(!isExpanded)} id="ticker-content">
                {content}
            </TickerContent>
            <motion.div
                id="THIS"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isExpanded && <ExpandedContent>{children}</ExpandedContent>}
            </motion.div>
        </TickerContainer>
    );
};