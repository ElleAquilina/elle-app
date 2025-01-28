import profile from '@/assets/images/profile.jpg'
import { SiGithub } from '@icons-pack/react-simple-icons'
import LinkedIn from '@/assets/icons/linkedin'
import ThemeToggle from '@/components/theme-toggle'
import Drawer from '@/components/drawer'

function Header() {
    return (
        <>
            <header className='top-4 flex w-full justify-between p-2'>
                <div className='md:hidden'>
                    <Drawer />
                </div>
                <div className='flex items-center justify-center pl-2'>
                    <img
                        src={profile}
                        alt='Profile picture'
                        className='h-10 w-10 rounded-full'
                    />
                    <h3>AQUILINA</h3>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <nav className='jutify-center hidden items-center space-x-4 pr-2 md:flex'>
                        <a href='#'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#experience'>Experience</a>
                        <a href='#projects'>Projects</a>
                    </nav>
                    <div className='hidden flex-row space-x-4 md:flex'>
                        <LinkedIn color='white' />
                        <SiGithub />
                    </div>
                    <ThemeToggle />
                </div>
            </header>
        </>
    )
}

export default Header
