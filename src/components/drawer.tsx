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
                        <div className='sticky top-0 flex w-full justify-end p-6'>
                            <button onClick={toggleDrawer}>
                                <X />
                            </button>
                        </div>
                        <ul className='flex flex-col justify-center space-y-6 px-6'>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <House className='mr-5 inline' />
                                <a href='#' onClick={toggleDrawer}>
                                    Home
                                </a>
                            </li>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <CircleUserRound className='mr-5 inline' />
                                <a href='#about' onClick={toggleDrawer}>
                                    About
                                </a>
                            </li>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <Album className='mr-5 inline' />
                                <a href='#experience' onClick={toggleDrawer}>
                                    Experience
                                </a>
                            </li>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <Table2 className='mr-5 inline' />
                                <a href='#projects' onClick={toggleDrawer}>
                                    Projects
                                </a>
                            </li>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <Telescope className='mr-5 inline' />
                                <a href='#hobbies' onClick={toggleDrawer}>
                                    Hobbies
                                </a>
                            </li>
                            <li className='from-transparent via-background py-2 hover:bg-gradient-to-l'>
                                <MessageCircleQuestion className='mr-5 inline' />
                                <a href='#contact' onClick={toggleDrawer}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Drawer
