import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import Moon from '@/assets/moon'
import Sun from '@/assets/sun'

function ThemeToggle() {
    const [theme, setTheme] = useState('dark')

    const Icon = theme === 'light' ? Sun : Moon

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        setTheme(storedTheme ? storedTheme : 'dark')
        console.log(storedTheme)
    }, [])

    useEffect(() => {
        document.body.className = theme
        //localStorage.setItem('theme', theme)
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
