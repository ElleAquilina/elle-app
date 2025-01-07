import profile from '@/assets/profile-2.jpg'
import git from '@/assets/icons/git.svg'
import react from '@/assets/icons/react.svg'
import { motion } from 'framer-motion'
import WordCarousel from '@/components/word-carousel.tsx'
import { ChevronDown } from 'lucide-react'

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
        { name: 'Git', icon: git },
        { name: 'ReactJS', icon: react },
    ]

    return (
        <>
            <div className='px-10'>
                <div className='flex h-screen flex-col items-center justify-evenly'>
                    <div>
                        <h1>Hi there, </h1>
                        <h1>I'm Elle Aquilina</h1>
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

                <div className='p-10'>
                    <h1>About Me</h1>
                    <p>
                        I'm a full-stack developer based somewhere amongst the
                        cornfields of Champaign, IL. I've been interested in
                        tech since I was a kid- my first website in the early
                        00's featured a table tag fueled nightmare.
                        <br />
                        Since then, I've worked professionally for a large
                        fintech company, a Canadian government grants focused
                        company, and now I'm looking for my next adventure.
                        <br />
                        And my personal projects? Well, I made this website,
                        host my own personal 'cloud server' that I built myself,
                        and I'm always working on something new!
                    </p>
                </div>
                <div className='p-10'>
                    <h1>Skills</h1>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {skills.map((skill) => (
                            <div>
                                <img src={skill.icon} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='p-4'>
                    <h1>Experience</h1>
                    <h2>Professional</h2>
                    <p>APEX Fintech Solutions</p>
                    <p>
                        A company providing tax software for large brokerages
                        and firms- I worked here for over four years. Unlike
                        most full-stack positions where you might fall into a
                        dedicated roll, I got to work on everything from cloud
                        AWS infrastructure, back-end performance improvements,
                        rewriting our API, and upgrading and improving our
                        AngularJS front-end.
                    </p>
                    <p>Eperformance Inc</p>
                    <p>
                        Providing grant applications, management, and
                        integrations with the Government of Canada, and my first
                        'real' full-stack job. I excelled at learning legacy
                        softwares and implementing new features within the
                        'confines' of our old tech and integrating into
                        Microsoft Dynamics CRM.
                    </p>
                    <h2>Personal</h2>
                    <p>Aquilina.cloud</p>
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
