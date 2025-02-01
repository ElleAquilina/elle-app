import Header from '@/components/header'
import { Button } from '@/components/button'
import Typewriter from '@/components/typewriter'
import IconList from '@/components/icon-list'
import Waves from '@/components/waves'
import Blobs from '@/components/blobs'
import Timeline from '@/components/timeline'
import Programmer from '@/assets/images/programmer.svg'
import { motion } from 'framer-motion'
import { ChevronDown, Send } from 'lucide-react'

function Home() {
    const timelineData = [
        {
            title: '2020 2024',
            content: <div>hello testing again some content</div>,
        },
        {
            title: '2017 2020',
            content: <div>another test</div>,
        },
    ]

    return (
        <div className='w-full place-self-center'>
            <div
                id='hero'
                className='bg-background relative flex h-screen w-full flex-col overflow-hidden'
            >
                <Waves />
                <Header />
                <div className='z-10 flex flex-grow flex-col-reverse items-center justify-evenly self-center md:w-4/5 md:flex-row'>
                    <div className='flex flex-col justify-center md:w-3/4 lg:px-10'>
                        <Blobs />
                        <h4 className='md:-mx-6 md:mb-4 md:text-3xl lg:text-4xl'>
                            Hi there,
                        </h4>
                        <h3 className='text-center md:text-left md:text-5xl lg:text-6xl'>
                            I'm{' '}
                            <span className='text-primary'>ELLE AQUILINA</span>
                        </h3>
                        <h6 className='mt-6 md:text-xl lg:text-2xl'>
                            I'm a full-stack developer that enjoys
                            <br />
                            <Typewriter />
                        </h6>
                        <Button
                            className='text-on-primary mt-6 hidden w-30 sm:flex'
                            asChild
                        >
                            <a href='#contact'>
                                <Send /> Contact Me
                            </a>
                        </Button>
                    </div>
                    <div className='flex w-3/5'>
                        <img
                            src={Programmer}
                            alt={'Illustration of programmer at computer desk'}
                        />
                    </div>
                </div>
                <motion.div
                    animate={{ y: 10 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.5,
                    }}
                    className='z-10 self-center pb-6'
                >
                    <ChevronDown />
                </motion.div>
            </div>
            <div
                id='about'
                className='bg-surface/50 flex flex-col space-x-[10%] p-[10%] md:flex-row'
            >
                <div className='md:w-1/2'>
                    <h4 className='text-primary'>&#62; ABOUT ME</h4>
                </div>
                <div>
                    <div className='flex flex-row items-baseline'>
                        <h1>5</h1>
                        <span>Years of experience</span>
                        <h1></h1>
                    </div>
                    <p>Lorem ipsum etc</p>
                </div>
            </div>
            <div
                id='experience'
                className='bg-background flex flex-col space-x-[10%] p-[10%] md:flex-row'
            >
                <h4 className='text-primary'>&#62; EXPERIENCE</h4>
                <Timeline data={timelineData} />

                <div id='skills'>
                    <h4 className='text-primary'>&#62; SKILLS</h4>
                    <IconList />
                </div>
            </div>
        </div>
    )
}

export default Home
