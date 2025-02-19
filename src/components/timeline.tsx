import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

interface TimelineEntry {
    year: string
    title: string
    content: React.ReactNode
}

function Timeline({ data }: { data: TimelineEntry[] }) {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['0 0.5', '1 0.5'],
    })

    return (
        <div ref={scrollRef} className='flex min-h-150 grow flex-row'>
            {/* Scroll Bar */}
            <motion.div
                style={{
                    originY: 0,
                    scaleY: scrollYProgress,
                }}
                className='bg-on-background relative top-1 h-full min-w-1 sm:left-[calc(20%+33px)]'
            />
            <div className='flex grow flex-col'>
                {data.map((item) => (
                    <TimelineEntry entry={item} />
                ))}
            </div>
        </div>
    )
}

function TimelineEntry({ entry }: { entry: TimelineEntry }) {
    const timelineDataVariant = {
        hidden: { y: 30 },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5,
                type: 'ease',
                ease: 'easeOut',
            },
        },
    }
    return (
        <div className='flex grow flex-row'>
            {/* Year */}
            <motion.div
                variants={timelineDataVariant}
                initial={'hidden'}
                whileInView={'visible'}
                className='hidden w-1/5 min-w-1/5 sm:block'
            >
                <p className='-mt-1 justify-self-end'>{entry.year}</p>
            </motion.div>

            {/* Dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className='bg-primary z-2 mr-3 h-6 min-w-6 rounded-full sm:mx-5'
            />

            {/* Data (title, content) */}
            <motion.div
                variants={timelineDataVariant}
                initial={'hidden'}
                whileInView={'visible'}
                className='-mt-2 mb-10'
            >
                <p className='mt-2 sm:hidden'>{entry.year}</p>
                <h4>{entry.title}</h4>
                <p className='text-justify'>{entry.content}</p>
            </motion.div>
        </div>
    )
}

export default Timeline
