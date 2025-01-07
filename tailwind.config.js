/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                background: 'rgba(var(--background))',
                border: 'rgba(var(--border))',
            },
            fontFamily: {
                karla: ['Karla', 'ui-sans-serif', 'sans-serif'],
                mukta: ['Mukta', 'sans-serif'],
                muktabold: ['MuktaBold', 'sans-serif'],
            },
        },
    },
    plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    )

    addBase({
        ':root': newVars,
    })
}
