import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    X,
    Menu,
    House,
    Album,
    Table2,
    MessageCircleQuestion,
    Telescope,
    CircleUserRound,
} from 'lucide-react'
import { Button } from '@/components/button'

function Drawer() {
    const [open, setOpen] = useState<boolean>(false)
    const toggleDrawer = () => setOpen(!open)

    return (
        <div className='drawer'>
            <Button variant='ghost' size='icon' onClick={toggleDrawer}>
                <Menu />
            </Button>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={toggleDrawer}
                    className='fixed inset-0 z-50 h-[100vh] bg-white/60 backdrop-blur-lg'
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ ease: 'easeInOut' }}
                        onClick={(e) => e.stopPropagation()}
                        className='absolute inset-x-0 flex h-[100vh] w-[70vw] flex-col overflow-hidden rounded-r-3xl bg-drawer'
                    >
                        <div className='sticky top-0 flex w-full justify-center pt-6'>
                            <button onClick={toggleDrawer}>
                                <X />
                            </button>
                        </div>
                        <ul className='flex flex-col justify-evenly space-y-10 p-10'>
                            <li className='flex flex-row items-center'>
                                <House className='mr-5' />
                                Home
                            </li>
                            <li className='flex flex-row items-center'>
                                <CircleUserRound className='mr-5' />
                                About
                            </li>
                            <li className='flex flex-row items-center'>
                                <Album className='mr-5' />
                                Experience
                            </li>
                            <li className='flex flex-row items-center'>
                                <Table2 className='mr-5' />
                                Projects
                            </li>
                            <li className='flex flex-row items-center'>
                                <Telescope className='mr-5' />
                                Hobbies
                            </li>
                            <li className='flex flex-row items-center'>
                                <MessageCircleQuestion className='mr-5' />
                                Contact
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Drawer
