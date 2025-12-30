import { motion } from 'framer-motion'
import React from 'react'
export default function SkeletonLoader() {
  return (
    <section className='columnbox gap-2 px-2'>
        <motion.span animate={{ background: 'linear-gradient(-45deg, #f1f1f1, #949494)'}} initial={{ background: 'linear-gradient(-45deg, #949494, #f1f1f1)'}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(-45deg, #f1f1f1, #949494)'}} initial={{ background: 'linear-gradient(-45deg, #949494, #f1f1f1)'}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(-45deg, #f1f1f1, #949494)'}} initial={{ background: 'linear-gradient(-45deg, #949494, #f1f1f1)'}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}} className='w-full h-36 rounded-lg'></motion.span>
        <motion.span animate={{ background: 'linear-gradient(-45deg, #f1f1f1, #949494)'}} initial={{ background: 'linear-gradient(-45deg, #949494, #f1f1f1)'}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}} className='w-3/4 h-10 rounded-lg'></motion.span>
    </section>
  )}
