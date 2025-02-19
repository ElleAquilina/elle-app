import { useState } from 'react'
import { cn } from '@/utils/cn.ts'

interface Icon {
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    name: string
}

function IconList({ data, size }: { data: Icon[]; size: string }) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <>
            <div className='mt-5 flex flex-wrap justify-center gap-5 rounded-lg'>
                {data.map((icon, index) => (
                    <div
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            'flex flex-col items-center justify-evenly transition-all duration-300 ease-out',
                            hovered != null &&
                                hovered != index &&
                                'scale-[0.90] blur-sm grayscale',
                        )}
                    >
                        <icon.icon
                            color='default'
                            className='m-0'
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default IconList
