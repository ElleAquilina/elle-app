import { SiGithub } from '@icons-pack/react-simple-icons'
import LinkedIn from '@/assets/icons/linkedin'
import ThemeToggle from '@/components/theme-toggle'
import Drawer from '@/components/drawer'

function Header() {
    return (
        <>
            <header className='bg-surface top-0 z-30 flex w-full justify-between p-2'>
                <div className='md:hidden'>
                    <Drawer />
                </div>
                <div className='text-on-surface flex items-center justify-center pl-2'>
                    <h4>AQUILINA</h4>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <nav className='jutify-center font-mukta-bold hidden items-center space-x-4 pr-2 md:flex'>
                        <a href='#'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#experience'>Experience</a>
                        <a href='#hobbies'>Other Stuff</a>
                    </nav>
                    <div className='hidden flex-row space-x-4 md:flex'>
                        <a
                            href='https://www.linkedin.com/in/elle-aquilina/'
                            target='_blank'
                        >
                            <LinkedIn className='h-6 w-6 fill-current' />
                        </a>
                        <a
                            href='https://github.com/ElleAquilina'
                            target='_blank'
                        >
                            <SiGithub />
                        </a>
                    </div>
                    <ThemeToggle />
                </div>
            </header>
        </>
    )
}

export default Header
