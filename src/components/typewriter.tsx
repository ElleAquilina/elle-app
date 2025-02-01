import { useState } from 'react'
import { ReactTyped } from 'react-typed'

function Typewriter({ useColors }: { useColors: boolean }) {
    const typewriterText = [
        'full-stack development',
        'back-end development',
        'web design',
        'home servers &#38; networking',
        'self hosting',
        'photography',
        'baking',
        'creating',
        'self-teaching',
    ]

    const typewriterColors = ['text-primary', 'text-secondary', 'text-accent']

    const [typewriterColor, setTypewriterColor] = useState('text-on-background')

    function updateTypewriterColor() {
        setTypewriterColor((prevColor) => {
            const currentIndex = typewriterColors.indexOf(prevColor)
            const nextIndex = (currentIndex + 1) % typewriterColors.length
            return typewriterColors[nextIndex]
        })
    }
    return (
        <>
            <ReactTyped
                strings={typewriterText}
                typeSpeed={50}
                loop
                backSpeed={30}
                showCursor={true}
                className={typewriterColor}
                preStringTyped={() => {
                    useColors ? updateTypewriterColor() : null
                }}
            />
        </>
    )
}

export default Typewriter
