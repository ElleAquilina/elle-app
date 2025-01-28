import { useState } from 'react'
import { cn } from '@/utils/cn.ts'
import Java from '@/assets/icons/java'
import AWS from '@/assets/icons/aws'
import { SiJavascript, SiTypescript } from '@icons-pack/react-simple-icons'

function IconList() {
    const [hovered, setHovered] = useState<number | null>(null)

    const cards = [
        { icon: Java, name: 'Java' },
        { icon: SiJavascript, name: 'Javascript' },
        { icon: SiTypescript, name: 'Typescript' },
        { icon: AWS, name: 'AWS' },
    ]

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 rounded-lg'>
                {cards.map((card, index) => (
                    <div
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            'border-highlight flex h-24 w-24 flex-col items-center justify-evenly rounded-xl border-2 transition-all duration-300 ease-out sm:h-32 sm:w-32',
                            hovered != null &&
                                hovered != index &&
                                'border-secondary scale-[0.90] blur-sm grayscale',
                        )}
                    >
                        <card.icon color='default' className='h-10 w-10' />
                        {card.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default IconList
