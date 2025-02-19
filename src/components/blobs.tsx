import { motion } from 'framer-motion'

function Blobs() {
    return (
        <>
            <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 900 600'
                className='absolute bottom-40 -left-[35%] -z-10 w-100'
            >
                <g transform='translate(438.1779319560327 334.1839153795115)'>
                    <motion.path
                        d='M212.4 -255.3C264.1 -209.7 287.2 -132.2 280.3 -65.1C273.5 2 236.8 58.8 194.4 93.6C152.1 128.4 104.1 141.2 54.1 167.6C4.2 193.9 -47.7 233.7 -98.6 232C-149.5 230.3 -199.5 187.2 -229.3 133.4C-259.2 79.6 -268.9 15.2 -242.4 -26.7C-215.9 -68.7 -153.2 -88.2 -106.7 -134.7C-60.3 -181.2 -30.1 -254.6 25.1 -284.5C80.3 -314.4 160.7 -300.8 212.4 -255.3'
                        fill='currentColor'
                        fillOpacity='0.3'
                        animate={{
                            rotate: 30,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className='fill-surface'
                    />
                </g>
            </motion.svg>
            <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 900 600'
                className='absolute bottom-30 -left-[40%] -z-10 w-100 rotate-45'
            >
                <g transform='translate(450.96486883139346 335.0355923854228)'>
                    <motion.path
                        d='M247.3 -293.9C318.4 -288.9 372.2 -213.6 371.6 -138.9C370.9 -64.1 315.8 10.3 261.7 56.7C207.6 103.1 154.7 121.5 111.2 151.6C67.8 181.6 33.9 223.3 -0.6 224.1C-35.1 224.9 -70.1 184.9 -133.4 161.3C-196.6 137.6 -288.1 130.5 -335.5 85.2C-383 40 -386.4 -43.4 -343.5 -91.8C-300.5 -140.3 -211.1 -153.9 -146.1 -160.9C-81.1 -167.9 -40.6 -168.3 23.8 -201.1C88.2 -233.9 176.3 -299 247.3 -293.9'
                        fill='currentColor'
                        fillOpacity='0.2'
                        animate={{
                            rotate: 30,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className='fill-surface'
                    />
                </g>
            </motion.svg>
        </>
    )
}

export default Blobs
