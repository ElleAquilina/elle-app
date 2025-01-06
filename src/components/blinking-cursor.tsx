import { motion } from 'framer-motion'

function BlinkingCursor() {
    return (
        <motion.div
            animate='blinking'
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
            }}
            className='inline-block w-px translate-y-1'
        />
    )
}

export const BlinkingCursor
const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: 'linear',
            times: [0, 0.5, 0.5, 1],
        },
    },
}

export default function CursorBlinker() {
    return (
        <motion.div
            variants={cursorVariants}
            animate='blinking'
            className='inline-block h-5 w-[1px] translate-y-1 bg-slate-900'
        />
    )
}
