import { SiGithub } from '@icons-pack/react-simple-icons'
import LinkedIn from '@/assets/icons/linkedin'
import ThemeToggle from '@/components/theme-toggle'
import Drawer from '@/components/drawer'

function Header() {
    return (
        <>
            <header className='sticky top-0 flex w-full justify-between border-b border-b-border p-2 backdrop-blur'>
                <div className='md:hidden'>
                    <Drawer />
                </div>
                <div className='flex items-center justify-center pl-2'>
                    <h3>Aquilina</h3>
                </div>
                <nav className='jutify-center hidden items-center space-x-4 md:flex'>
                    <a href='#'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
                    <a href='#projects'>Projects</a>
                    <a href='#hobbies'>Hobbies</a>
                    <a href='#contact'>Contact</a>
                </nav>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div className='hidden md:block'>
                        <SiGithub />
                    </div>
                    <ThemeToggle />
                </div>
            </header>
        </>
    )
}

export default Header
