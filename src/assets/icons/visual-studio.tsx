import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 95.51' {...props}>
        <defs>
            <linearGradient
                id='b'
                x1={48}
                x2={48}
                y1={97.75}
                y2={2.25}
                gradientTransform='matrix(1 0 0 -1 0 98)'
                gradientUnits='userSpaceOnUse'
            >
                <stop offset={0} stopColor='#fff' />
                <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
            <mask
                id='a'
                width={96}
                height={95.51}
                x={0}
                y={0}
                maskUnits='userSpaceOnUse'
            >
                <path
                    d='M68.89 95.6a6 6 0 0 0 3.93-.44l19.78-9.51a6 6 0 0 0 3.4-5.41V15.76a6 6 0 0 0-3.4-5.41L72.82.84a6 6 0 0 0-4.48-.29A6 6 0 0 0 66 2L34.12 37.26 15.5 22l-1.63-1.4a4 4 0 0 0-3.61-.83 2.55 2.55 0 0 0-.53.18L2.46 23A4 4 0 0 0 0 26.37V69.63A4 4 0 0 0 2.46 73l7.27 3a2.55 2.55 0 0 0 .53.18 4 4 0 0 0 3.61-.83L15.5 74l18.62-15.26L66 94a6 6 0 0 0 2.89 1.6ZM72 27.68 47.21 48 72 68.32Zm-60 6.59L24.41 48 12 61.73Z'
                    style={{
                        fillRule: 'evenodd',
                        fill: '#fff',
                    }}
                    transform='translate(0 -.25)'
                />
            </mask>
        </defs>
        <title>{'BrandVisualStudioWin2019'}</title>
        <g
            style={{
                mask: 'url(#a)',
            }}
        >
            <path
                d='M13.87 75.4a4 4 0 0 1-4.14.65L2.46 73A4 4 0 0 1 0 69.33V26.67A4 4 0 0 1 2.46 23l7.27-3a4 4 0 0 1 4.14.65L15.5 22a2.21 2.21 0 0 0-3.5 1.8v48.4a2.21 2.21 0 0 0 3.5 1.8Z'
                style={{
                    fill: '#52218a',
                }}
                transform='translate(0 -.25)'
            />
            <path
                d='M2.46 73A4 4 0 0 1 0 69.33V69a2.31 2.31 0 0 0 4 1.55L66 2A6 6 0 0 1 72.82.84l19.78 9.52a6 6 0 0 1 3.4 5.41V16a3.79 3.79 0 0 0-6.19-2.93L15.5 74l-1.63 1.4a4 4 0 0 1-4.14.65Z'
                style={{
                    fill: '#6c33af',
                }}
                transform='translate(0 -.25)'
            />
            <path
                d='M2.46 23A4 4 0 0 0 0 26.67V27a2.31 2.31 0 0 1 4-1.55L66 94a6 6 0 0 0 6.82 1.16l19.78-9.52a6 6 0 0 0 3.4-5.41V80a3.79 3.79 0 0 1-6.19 2.93L15.5 22l-1.63-1.4a4 4 0 0 0-4.14-.6Z'
                style={{
                    fill: '#854cc7',
                }}
                transform='translate(0 -.25)'
            />
            <path
                d='M72.82 95.16A6 6 0 0 1 66 94a3.52 3.52 0 0 0 6-2.49v-87A3.52 3.52 0 0 0 66 2 6 6 0 0 1 72.82.84l19.78 9.51a6 6 0 0 1 3.4 5.41v64.48a6 6 0 0 1-3.4 5.41Z'
                style={{
                    fill: '#b179f1',
                }}
                transform='translate(0 -.25)'
            />
            <g
                style={{
                    opacity: 0.25,
                }}
            >
                <path
                    d='M68.89 95.6a6 6 0 0 0 3.93-.44l19.78-9.51a6 6 0 0 0 3.4-5.41V15.76a6 6 0 0 0-3.4-5.41L72.82.84a6 6 0 0 0-4.48-.29A6 6 0 0 0 66 2L34.12 37.26 15.5 22l-1.63-1.4a4 4 0 0 0-3.61-.83 2.55 2.55 0 0 0-.53.18L2.46 23A4 4 0 0 0 0 26.37V69.63A4 4 0 0 0 2.46 73l7.27 3a2.55 2.55 0 0 0 .53.18 4 4 0 0 0 3.61-.83L15.5 74l18.62-15.26L66 94a6 6 0 0 0 2.89 1.6ZM72 27.68 47.21 48 72 68.32Zm-60 6.59L24.41 48 12 61.73Z'
                    style={{
                        fill: 'url(#b)',
                        fillRule: 'evenodd',
                    }}
                    transform='translate(0 -.25)'
                />
            </g>
        </g>
    </svg>
)
export default SvgComponent
