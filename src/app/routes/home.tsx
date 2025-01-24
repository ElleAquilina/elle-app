import profile from '@/assets/images/profile-2.jpg'
import { motion } from 'framer-motion'
import WordCarousel from '@/components/word-carousel.tsx'
import { ChevronDown } from 'lucide-react'
import {
    SiGit,
    SiGithub,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiJira,
} from '@icons-pack/react-simple-icons'
import Java from '@/components/icons/java'
import Vite from '@/components/icons/vite'
import AWS from '@/components/icons/aws'
import LinkedIn from '@/components/icons/linkedin'
import { Button } from '@/components/button.tsx'
import IconCard from '@/components/icon-card.tsx'

function Home() {
    const words = [
        'full-stack\u00A0development.',
        'back-end\u00A0development.',
        'front-end\u00A0development.',
        'APIs.',
        'design.',
        'cloud\u00A0services.',
        'networking.',
        'self\u00A0hosting.',
        'new\u00A0technologies.',
        'legacy\u00A0technologies.',
        'photography.',
    ]

    const languageCards = [
        { icon: Java, name: 'Java' },
        { icon: SiJavascript, name: 'Javascript' },
    ]

    return (
        <>
            <div className='px-10'>
                <div className='flex h-[calc(100vh-53px)] flex-col items-center justify-evenly md:flex-row'>
                    <div>
                        <h1>Hi there, </h1>
                        <h1>I'm Elle Aquilina.</h1>
                        <p>
                            I code, I tinker, and I'm always working on
                            something new.
                        </p>
                        <div className='hidden md:flex'>
                            <WordCarousel words={words} />
                        </div>
                    </div>
                    <div className='flex w-4/5 items-center md:w-1/2 md:max-w-xl'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            src={profile}
                            alt='Profile picture'
                            className='rounded-full'
                        />
                        <WordCarousel words={words} />
                    </div>
                    <div className='md:hidden'>
                        <Button variant='ghost' size='icon'>
                            <a href='https://www.linkedin.com/in/elle-aquilina/'>
                                <LinkedIn />
                            </a>
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <a
                                href='https://github.com/ElleAquilina'
                                target='_blank'
                            >
                                <SiGithub />
                            </a>
                        </Button>
                    </div>
                    <motion.div
                        animate={{ y: 10 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.5,
                        }}
                        className='-z-10 md:hidden'
                    >
                        <ChevronDown />
                    </motion.div>
                </div>
                <div className='flex flex-col pt-14' id='about'>
                    <h1>About Me</h1>
                    <div className='pb-10 pl-10'>
                        <p>
                            I'm a full-stack developer based somewhere amongst
                            the cornfields of Champaign, IL. I've been
                            interested in tech since I was a kid; my first
                            website was a &#60;table&#62; tag fueled nightmare,
                            and I learned how to solder just to fix my own
                            devices.
                        </p>
                        <p>
                            Since then, I've worked professionally for a large
                            fintech company, a Canadian government grants
                            focused company, and now I'm looking for my next
                            adventure.
                        </p>
                        <p>
                            And my personal projects? Well, check out below to
                            learn more about me!
                        </p>
                    </div>
                </div>
                <div id='skills'>
                    <h1>My Skills</h1>
                    <IconCard cards={languageCards} />
                </div>
                <div className='h-dvh' id='experience'>
                    <h1>Experience</h1>
                    <p>
                        I've gathered these over my professional career and
                        personal projects. Click to learn more!
                    </p>
                    <h2>Professional</h2>
                    <p>APEX Fintech Solutions</p>
                    <p>
                        I worked here as a full stack developer for just over
                        four years, creating tax software for large brokerages
                        and firms. Unlike most full-stack positions where you
                        might fall into a dedicated roll, I got to work on
                        everything from cloud AWS infrastructure, back-end
                        performance improvements, personally rewriting our API
                        for performance and security improvements, and upgrading
                        and improving our AngularJS front-end.
                    </p>
                    <p>Eperformance Inc</p>
                    <p>
                        My first 'real' full-stack job working with the
                        Government of Canada. I started as a technical writer
                        and was quickly promoted to Junior Developer. I excelled
                        at learning all the legacy systems and implementing new
                        features within the 'confines' of our old tech and
                        integrating into Microsoft Dynamics CRM.
                    </p>
                </div>
                <div id='projects'>
                    <h1>Personal Projects</h1>
                    <h2>Networking & Home Server</h2>
                    <p>
                        Shortly after moving into our home, I realised our
                        basement wifi was lacking. It snowballed from there; I
                        ran more CAT5 than I will ever need.
                    </p>
                </div>
                <div id='hobbies'>
                    <h1>Hobbies</h1>
                    <h2>Photography</h2>
                </div>
            </div>
        </>
    )
}

export default Home
