import { motion } from 'framer-motion'
import Blob from '@/assets/images/blob.svg'
import Blob2 from '@/assets/images/blob2.svg'

function Blobs() {
    return (
        <>
            <motion.img
                animate={{
                    rotate: 30,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                src={Blob}
                alt=''
                className='absolute bottom-40 -left-[35%] -z-10'
            />
            <motion.img
                animate={{
                    rotate: 30,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                src={Blob2}
                alt=''
                className='absolute bottom-30 -left-[40%] -z-10 rotate-45'
            />
        </>
    )
}

export default Blobs
