import Header from '@/components/header.tsx'
import Typewriter from '@/components/typewriter'
import IconList from '@/components/icon-list.tsx'

function Home() {
    return (
        <div className='w-full place-self-center sm:w-11/12'>
            <div id='hero' className='bg-backgroundPrimary h-screen'>
                <Header />
                <div className='p-[10%]'>
                    <h2>Hello, world</h2>
                    <h1>I'm Elle Aquilina</h1>
                    <h2>
                        I enjoy&nbsp;
                        <Typewriter />
                    </h2>
                </div>
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
