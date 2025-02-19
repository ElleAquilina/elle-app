import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        id='Layer_1'
        data-name='Layer 1'
        viewBox='0 0 64 64'
        {...props}
    >
        <defs>
            <style>{'.cls-3{fill:#fff}'}</style>
        </defs>
        <title>{'logo_vb'}</title>
        <circle
            cx={32}
            cy={32}
            r={32}
            style={{
                fill: '#004e8c',
            }}
        />
        <path
            d='M9.82 9A32 32 0 1 0 55 54.18Z'
            style={{
                opacity: 0.1,
                fill: '#fff',
            }}
        />
        <path
            d='M33.29 19.4 24 44.6h-3.29l-9.14-25.2h3.29l7 20a11.87 11.87 0 0 1 .51 2.23h.07a11 11 0 0 1 .56-2.28l7.12-20ZM36.92 44.6V19.4h7.17a7.84 7.84 0 0 1 5.18 1.6 5.17 5.17 0 0 1 1.92 4.17A6.13 6.13 0 0 1 50 28.89a6.26 6.26 0 0 1-3.2 2.25v.07a6.41 6.41 0 0 1 4.08 1.92 5.92 5.92 0 0 1 1.53 4.23 6.59 6.59 0 0 1-2.32 5.24 8.64 8.64 0 0 1-5.85 2Zm3-22.54v8.14h3a5.74 5.74 0 0 0 3.79-1.2 4.07 4.07 0 0 0 1.39-3.3q0-3.67-4.83-3.67Zm0 10.79v9.07h4a6 6 0 0 0 4-1.23 4.21 4.21 0 0 0 1.43-3.37q0-4.46-6.08-4.46Z'
            className='cls-3'
        />
    </svg>
)
export default SvgComponent
