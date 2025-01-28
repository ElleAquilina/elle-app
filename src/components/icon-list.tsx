import { useState } from 'react'
import { cn } from '@/utils/cn.ts'

type Card = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    name: string
}

function IconList({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 rounded-lg'>
                {cards.map((card, index) => (
                    <div
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            'border-highlight flex h-32 w-32 flex-col items-center justify-evenly rounded-xl border-2 bg-gray-800 transition-all duration-300 ease-out',
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
