import { NavLink } from 'react-router'
import { Menu } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import ThemeToggle from '@/components/theme-toggle.tsx'

function Header() {
    return (
        <>
            <header className='sticky top-0 flex w-full justify-between border-b border-b-border p-2 backdrop-blur'>
                <div className='flex items-center justify-center pl-2'>
                    <h3>Aquilina</h3>
                </div>
                <div className='flex items-center justify-center'>
                    <nav className='hidden space-x-4 md:block'>
                        <NavLink to='/#about'>About</NavLink>
                        <NavLink to='/'>Experience</NavLink>
                        <NavLink to='/'>Projects</NavLink>
                        <NavLink to='/'>Hobbies</NavLink>
                    </nav>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div className='hidden md:block'>
                        <SiGithub />
                    </div>
                    <ThemeToggle />
                    <div className='md:hidden'>
                        <Menu />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
