import { useState } from 'react'
import { ReactTyped } from 'react-typed'

function Typewriter() {
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

    const typewriterColors = [
        'text-textPrimary',
        'text-textSecondary',
        'text-textAccent',
    ]

    const [typewriterColor, setTypewriterColor] = useState(typewriterColors[0])

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
                    updateTypewriterColor()
                }}
            />
        </>
    )
}

export default Typewriter
