import profile from '@/assets/profile.jpg'
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
            <div className='flex flex-col items-center justify-center md:flex md:flex-row'>
                <div className='p-4 md:w-2/4'>
                    <p>Hi there, </p>
                    <h1>I'm Elle Aquilina</h1>
                    <p>I write code, and I make things work.</p>
                </div>
                <div className='bg-slate-500 p-10 md:w-2/4'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        src={profile}
                        alt='Profile picture'
                        className='rounded-full object-scale-down object-center'
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
                    I'm a full-stack developer based out of Champaign, IL with
                    corn fields for neighbors. I've been interested in all
                    things tech since I was a kid, and. I love learning, and
                    have worked on many a passion project, to enterprise-grade
                    SaaS solutions. Nothing is off limits!
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
