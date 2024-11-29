import { motion } from 'framer-motion'
import React from 'react'
export default function SkeletonLoader() {
  return (
    <section className='columnbox gap-2 px-2'>
        <motion.span animate={{ background: 'linear-gradient(225deg, #EAEAEA, #8f8f8f)'}} initial={{ background: 'linear-gradient(45deg, #EAEAEA, #8f8f8f)'}} transition={{duration: 1, repeat: Infinity , repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(225deg, #EAEAEA, #8f8f8f)'}} initial={{ background: 'linear-gradient(45deg, #EAEAEA, #8f8f8f)'}} transition={{duration: 1, repeat: Infinity , repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(225deg, #EAEAEA, #8f8f8f)'}} initial={{ background: 'linear-gradient(45deg, #EAEAEA, #8f8f8f)'}} transition={{duration: 1, repeat: Infinity , repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(225deg, #EAEAEA, #8f8f8f)'}} initial={{ background: 'linear-gradient(45deg, #EAEAEA, #8f8f8f)'}} transition={{duration: 1, repeat: Infinity , repeatType: 'reverse'}} className='w-3/4 h-10 rounded-lg'></motion.span>
    </section>
  )
}
