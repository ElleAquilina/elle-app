import profile from '@/assets/profile-2.jpg'
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

    return (
        <>
            <div className='flex flex-col-reverse items-center justify-center bg-red-200 md:flex md:max-w-6xl md:flex-row'>
                <div className='p-4 md:w-2/4'>
                    <p>Hi there, </p>
                    <h1>I'm Elle Aquilina</h1>
                    <p>I write code, and I make things work.</p>
                </div>
                <div className='flex h-40 items-center justify-center bg-slate-500 md:w-2/4'>
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
            <div className='flex flex-row justify-center bg-slate-300'>
                <span>I work with&nbsp;</span>
                <WordCarousel words={wordCarouselList} />
            </div>
            <div className='p-4'>
                <h1>About Me</h1>
                <p>
                    I'm a full-stack developer based out of Champaign, IL
                    somewhere amongst the corn fields. I've been interested in
                    tech since I was a kid, and my first website in my teen
                    years featured a layout littered with table tags.
                    <br />
                    Since then, I've worked professionally for a government
                    grants focused company, and a large fintech
                    software-as-a-service company. And personally? Well, I made
                    this website, host my own personal 'cloud server' in my
                    basement, and I'm always working on something new!
                    <br />
                    Check out more below!
                </p>
            </div>
            <div className='p-4'>
                <h1>Experience</h1>
                <h2>Professional</h2>
                <p></p>
                <h2>Personal</h2>
            </div>
            <div className='p-4'>
                <h1>Projects (Carousel Images) (Hover to website + github)</h1>
                <div className='flex flex-row'>
                    <h2>THIS WEBSITE</h2>
                    <h2>Home Networking & Self Hosting</h2>
                    <h2>XIV History</h2>
                </div>
            </div>
            <div className='p-4'>
                <h1>Hobbies</h1>
                <h2>Photography</h2>
                <p>Image carousel</p>
            </div>
        </>
    )
}

export default Home
