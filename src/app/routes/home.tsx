import Header from '@/components/header.tsx'

function Home() {
    return (
        <div className='w-11/12 place-self-center'>
            <div className='h-screen bg-slate-700'>
                <Header />
                <h2>Hello, world</h2>
                <h1>I'm Elle Aquilina</h1>
            </div>
            <div className='h-screen bg-slate-900'>
                <h1>Skills</h1>
            </div>
        </div>
    )
}

export default Home
