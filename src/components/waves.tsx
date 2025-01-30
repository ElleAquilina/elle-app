import { motion } from 'framer-motion'
import Wave from '@/assets/images/wave.svg'
import Wave2 from '@/assets/images/wave2.svg'
import Wave3 from '@/assets/images/wave3.svg'

function Waves() {
    return (
        <>
            <motion.img
                initial={{ x: -50 }}
                animate={{ x: 50 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                src={Wave}
                alt=''
                className='absolute origin-top scale-x-150 scale-y-50'
            />
            <motion.img
                initial={{ x: 50 }}
                animate={{ x: -50 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                src={Wave2}
                alt=''
                className='absolute scale-x-150'
            />
            <motion.img
                initial={{ x: 50 }}
                animate={{ x: -50 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                src={Wave3}
                alt=''
                className='absolute scale-x-150 scale-y-150'
            />
        </>
    )
}

export default Waves
