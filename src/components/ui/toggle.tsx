import { motion } from 'framer-motion'

function Toggle({
    toggled,
    isToggled,
}: {
    toggled: boolean
    isToggled: (checked: boolean) => void
}) {
    return (
        <form className='flex items-center space-x-4 antialiased'>
            <label
                htmlFor='checkbox'
                className={`relative flex h-7 w-[60px] cursor-pointer items-center rounded-full border border-transparent px-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] transition duration-200 ${toggled ? 'bg-cyan-500' : 'border-slate-500 bg-slate-700'}`}
            >
                <motion.div
                    initial={{
                        width: '20px',
                        x: toggled ? 0 : 32,
                    }}
                    animate={{
                        height: ['20px', '10px', '20px'],
                        width: ['20px', '30px', '20px', '20px'],
                        x: toggled ? 32 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1,
                    }}
                    key={String(toggled)}
                    className='z-10 block h-[20px] rounded-full bg-white shadow-md'
                />
                <input
                    type='checkbox'
                    checked={toggled}
                    onChange={(e) => isToggled(e.target.checked)}
                    className='hidden'
                    id='checkbox'
                />
            </label>
        </form>
    )
}

export default Toggle
