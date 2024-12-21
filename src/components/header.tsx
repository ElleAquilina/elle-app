import { NavLink } from 'react-router'
import { Menu } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle.tsx'

function Header() {
    return (
        <>
            <header className='flex w-full justify-between p-4'>
                <h1>Aquilina</h1>
                <nav className='hidden space-x-4 md:block'>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/'>Experience</NavLink>
                    <NavLink to='/'>Projects</NavLink>
                    <NavLink to='/'>Hobbies</NavLink>
                </nav>
                <div className='hidden md:block'>
                    <ThemeToggle />
                </div>
                <div className='md:hidden'>
                    <Menu />
                </div>
            </header>
        </>
    )
}

export default Header
