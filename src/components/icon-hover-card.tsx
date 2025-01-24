import { useState } from 'react'
import { cn } from '@/utils/cn.ts'

type Card = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    name: string
    desc: string
}

function IconHoverCard({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 rounded-lg'>
                {cards.map((card, index) => (
                    <div
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            'flex h-32 w-28 flex-col items-center justify-evenly rounded-xl bg-gray-800 transition-all duration-300 ease-out',
                            hovered != null &&
                                hovered != index &&
                                'scale-[0.90] blur-sm grayscale',
                        )}
                    >
                        <card.icon className='h-12 w-12' />
                        {card.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default IconHoverCard
