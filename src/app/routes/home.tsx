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
                        <Button className='mt-6 w-30' asChild>
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
                className='bg-backgroundSecondary flex flex-col space-x-[10%] p-[10%] sm:flex-row'
            >
                <div className='sm:w-1/2'>
                    <h3>&#62; ABOUT ME</h3>
                    <h2>I've been a full stack developer since 2018</h2>
                    <p>
                        I've been interested in tech since I was a kid; I built
                        my first website in the early 2000s was a
                        &#60;table&#62; tag fueled nightmare, and I was always
                        prying things open to see how they worked.
                    </p>
                    <p>
                        Since then, I've worked professionally for a large
                        fintech company, a Canadian government grants focused
                        company, and now I'm looking for my next adventure.
                    </p>
                    <p>More about my skills --</p>
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
            <div id='experience' className='bg-backgroundPrimary'>
                <div className='p-[10%]'>
                    <h2>Experiences</h2>
                </div>

                <div
                    id='skills'
                    className='bg-backgroundSecondary mx-[5%] rounded-xl border-2 border-border p-10'
                >
                    <h3>&#62; Skills</h3>
                    <IconList />
                </div>
            </div>
        </div>
    )
}

export default Home
