import profile from '@/assets/images/profile-2.jpg'
import { motion } from 'framer-motion'
import WordCarousel from '@/components/word-carousel.tsx'
import { ChevronDown } from 'lucide-react'
import Vite from '@/components/icons/vite'
import Typescript from '@/components/icons/typescript'
import TailwindCSS from '@/components/icons/tailwindcss'
import React from '@/components/icons/react'

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
        'new\u00A0tech.',
        'legacy\u00A0tech.',
        'photography.',
    ]

    const skills = [
        { icon: React, title: 'React' },
        { icon: Typescript, title: 'Typescript' },
        { icon: Vite, title: 'Vite' },
        { icon: TailwindCSS, title: 'TailwindCSS' },
    ]

    return (
        <>
            <div className='px-10'>
                <div className='flex h-screen flex-col items-center justify-evenly'>
                    <div>
                        <h1>Hi there, </h1>
                        <h1>I'm Elle Aquilina.</h1>
                        <br />
                        <p>
                            I code, I tinker, and I'm always working on
                            something new.
                        </p>
                    </div>
                    <div className='flex w-4/5 items-center justify-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            src={profile}
                            alt='Profile picture'
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <span>I work with&nbsp;</span>
                        <WordCarousel words={words} />
                    </div>
                    <motion.div
                        animate={{ y: 10 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.5,
                        }}
                        className='pb-10 md:hidden'
                    >
                        <ChevronDown />
                    </motion.div>
                </div>
                <div className='flex h-screen flex-col'>
                    <h1>About Me</h1>
                    <p>
                        I'm a full-stack developer based somewhere amongst the
                        cornfields of Champaign, IL. I've been interested in
                        tech since I was a kid- my first website in high school
                        featured a table tag fueled nightmare, and around then I
                        learned to solder my own broken devices.
                    </p>
                    <p>
                        Since then, I've worked professionally for a large
                        fintech company, a Canadian government grants focused
                        company, and now I'm looking for my next adventure.
                    </p>
                    <p>
                        And my personal projects? Well, I made this website,
                        host my own personal 'cloud server' that I built myself,
                        and I'm always working on something new!
                    </p>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {skills.map((skill) => (
                            <div className='flex flex-col items-center'>
                                <motion.div
                                    whileHover={{
                                        scale: 1.5,
                                    }}
                                >
                                    <skill.icon className='h-10 w-10' />
                                </motion.div>
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Experience</h1>
                    <h2>Professional</h2>
                    <p>APEX Fintech Solutions</p>
                    <p>
                        A company providing tax software for large brokerages
                        and firms- I worked here for over four years. Unlike
                        most full-stack positions where you might fall into a
                        dedicated roll, I got to work on everything from cloud
                        AWS infrastructure, back-end performance improvements,
                        personally rewriting our API for performance and
                        security improvements, and upgrading and improving our
                        AngularJS front-end.
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
                    <h2>Personal</h2>
                    <p>This Website! (aquilina.cloud)</p>
                    <p>
                        I wrote this website in Node, React, Vite, and
                        Typescript. I also used this to play around with some
                        animations using framer-motion. This website was then
                        deployed on my home server (check it out in my other
                        projects!) and secured behind Cloudflare, an Oracle VPN
                        tunnel, and a reverse proxy.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
