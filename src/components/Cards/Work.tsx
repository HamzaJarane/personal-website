import { CardTitle, WorkRow, WorkContainer } from '@/helpers/StyledComponents';
import tw from 'twin.macro';
import { works } from '@/helpers/getWork';
import { ScrollTrigger as ScrollTriggerContainer } from 'react-gsap';
import { useTranslation } from 'react-i18next';
import Ticker from '../Ticker';
import { Container, Section } from './AboutMe';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const DivHighlight = styled(motion.div)`
  ${tw`text-2xl text-center font-bold block mt-6 text-black uppercase`}
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
`;

const textVariants = {
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

function Work() {
    return (
        <Ticker content='LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS. LANGUAGES AND FRAMEWORKS.'>
            <Container>

                <Section>
                    <DivHighlight
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                        css={tw`!text-[80px]`}
                        whileHover={{ scale: 1.05, color: '#0066ff' }}
                    >
                        
                    </DivHighlight>
                </Section>

            </Container>
        </Ticker>
    );
}

export default Work;