import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorColor?: string;
  onComplete?: () => void;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  className = '',
  showCursor = true,
  cursorColor = 'bg-jungle-yellow',
  onComplete,
  tag = 'span',
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);
      return () => clearTimeout(timeout);
    } else {
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }
  }, [currentIndex, text, speed, delay, isInView, isComplete, onComplete]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag ref={ref} className={`${className} relative`}>
      <motion.span 
        className="inline-block relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Simplified letter-by-letter reveal */}
        <span className="inline-block relative">
          {displayText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0, 
                y: 10
              }}
              animate={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{
                duration: 0.2,
                delay: index * 0.03,
                ease: 'easeOut'
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>

        {/* Simplified cursor */}
        {showCursor && !isComplete && (
          <motion.span
            className={`inline-block w-0.5 h-[1em] ${cursorColor} ml-1 align-middle`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [1, 0],
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              repeatType: 'reverse',
            }}
          />
        )}
      </motion.span>
    </Tag>
  );
}

