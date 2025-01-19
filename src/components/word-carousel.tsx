import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useInterval from '@/hooks/use-interval.tsx'

function WordCarousel({ words }: { words: string[] }) {
    const [wordIndex, setWordIndex] = useState(1)

    // On each transition (4s), change the word and color
    useInterval(() => {
        setWordIndex((wordIndex + 1) % words.length)
    }, 4000)

    return (
        <>
            <div className='flex-row overflow-hidden'>
                {words[wordIndex].split('').map((char, index) => (
                    <AnimatePresence mode='popLayout'>
                        <motion.span
                            key={words[wordIndex] + index}
                            initial={{ y: -50, rotateX: -180 }}
                            animate={{ y: 0, rotateX: 0 }}
                            exit={{ y: 25, rotateX: 90, opacity: 0 }}
                            style={{ display: 'inline-flex' }}
                            transition={{
                                delay: (0.5 + index) * 0.1,
                                type: 'tween',
                            }}
                            className='z-0 font-bold text-blue-500'
                        >
                            {char}
                        </motion.span>
                    </AnimatePresence>
                ))}
            </div>
        </>
    )
}

export default WordCarousel
