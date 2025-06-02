import { frame, motion, MotionStyle, useSpring } from "motion/react"
import { RefObject, useEffect, useRef, useState } from "react"
import Image1 from '@/assets/images/1.jpg';

const ball: MotionStyle = {
    borderRadius: "50%",
    position: 'fixed',
    zIndex: 9999,
    borderWidth: '3px',
    borderColor: 'black',
    pointerEvents: 'none',
    transition: 'all 0.3s ease'
}

export default function Drag() {
    const ref = useRef<HTMLDivElement>(null);
    const { x, y, isHoveringName, currentLanguage } = useFollowPointer(ref);

    return (
        <motion.div
            ref={ref}
            style={{
                ...ball,
                x,
                y,
                width: isHoveringName ? 200 : 100,
                height: isHoveringName ? 200 : 100,
                backgroundColor: isHoveringName ? 'transparent' : 'white',
                backgroundImage: isHoveringName ? `url('/me.jpg')` : currentLanguage ? `url('/logos/${currentLanguage}.png')` : 'none',
                mixBlendMode: (currentLanguage || isHoveringName) ? 'unset' : 'difference',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    );
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);
    const [isHoveringName, setIsHoveringName] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<null | string>(null);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY, target }: MouseEvent) => {
            const element = ref.current!;
            const nameElement = (target as HTMLElement).closest('#hamza-name');

            setIsHoveringName(!!nameElement);

            const language = (target as HTMLElement).closest('[id^="language-"]');
            if (language) {
                const languageName = language.id.split('language-')[1];
                setCurrentLanguage(languageName);
            } else {
                setCurrentLanguage(null);
            }

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
                y.set(clientY - element.offsetTop - element.offsetHeight / 2);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y, isHoveringName, currentLanguage };
}