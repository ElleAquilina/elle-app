import profile from '@/assets/profile-2.jpg'
import git from '@/assets/icons/git.svg'
import react from '@/assets/icons/react.svg'
import { motion } from 'framer-motion'
import WordCarousel from '@/components/word-carousel.tsx'

function Home() {
    const wordCarouselList = [
        'full-stack.',
        'back-end.',
        'front-end.',
        'APIs.',
        'design.',
        'cloud\u00A0services.',
        'networking.',
        'self\u00A0hosting.',
        'photography.',
        'new\u00A0tech.',
        'legacy\u00A0tech.',
    ]

    const skillList = [
        { name: 'Git', icon: git },
        { name: 'ReactJS', icon: react },
    ]

    return (
        <>
            <div className='flex flex-col-reverse items-center justify-center md:flex md:max-w-6xl md:flex-row'>
                <div className='p-4 md:w-2/4'>
                    <p>Hi there, </p>
                    <h1>I'm Elle Aquilina</h1>
                    <p>I tinker, code, and am always learning.</p>
                </div>
                <div className='flex h-40 items-center justify-center md:w-2/4'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        src={profile}
                        alt='Profile picture'
                        className='relative w-2/4 rounded-full object-scale-down object-center'
                    />
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <span>I work on&nbsp;</span>
                <WordCarousel words={wordCarouselList} />
            </div>
            <div className='p-4'>
                <h1>About Me</h1>
                <p>
                    I'm a full-stack developer based out of Champaign, IL
                    somewhere amongst the corn fields. I've been interested in
                    tech since I was a kid- my first website in the 00's
                    featured a table tag fueled nightmare.
                    <br />
                    Since then, I've worked professionally for a large fintech
                    company, a Canadian government grants focused company, and
                    I'm looking for my next step up. And personally? Well, I
                    made this website, host my own personal 'cloud server' that
                    I built myself, and I'm always working on something new!
                    <br />
                    Check out more below!
                </p>
            </div>
            <div className='p-4'>
                <h1>Skills</h1>
                <div className='flex flex-wrap justify-center gap-2'>
                    {skillList.map((skill) => (
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
                    A company providing tax software for large brokerages and
                    firms- I worked here for over four years. Unlike most
                    full-stack positions where you might fall into a dedicated
                    roll, I got to work on everything from cloud AWS
                    infrastructure, back-end performance improvements, rewriting
                    our API, and upgrading and improving our AngularJS
                    front-end.
                </p>
                <p>Eperformance Inc</p>
                <p>
                    Providing grant applications, management, and integrations
                    with the Government of Canada, and my first 'real'
                    full-stack job. I excelled at learning legacy softwares and
                    implementing new features within the 'confines' of our old
                    tech and integrating into Microsoft Dynamics CRM.
                </p>
                <h2>Personal</h2>
                <p></p>
            </div>
        </>
    )
}

export default Home
