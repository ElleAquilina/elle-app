import { useEffect, useState } from 'react'
import { Button } from '@/components/button.tsx'
import Moon from '@/assets/icons/moon'
import Sun from '@/assets/icons/sun'

function ThemeToggle() {
    const [theme, setTheme] = useState('dark')

    const Icon = theme === 'light' ? Sun : Moon

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        setTheme(storedTheme ? storedTheme : 'dark')
    }, [])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <Button variant='ghost' size='icon' onClick={() => toggleTheme()}>
            <Icon />
        </Button>
    )
}

export default ThemeToggle
