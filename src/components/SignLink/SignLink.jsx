import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SignLink({ children, pattern }) {
  // signLink1 - branco (banner)
  // signLink2 - Azul (página)

  const [shadowPattern, setShadowPattern] = useState('signLink1')

  useEffect(()=>{
    pattern == 'signLink1' ? setShadowPattern('signLink1') : setShadowPattern('signLink2')
  })
  return (
    <Link to={'/login'}>
      <motion.button 
      initial={{boxShadow: shadowPattern == 'signLink1' ? '0px 0px 10px 1px rgba(255, 255, 255, 0.1' : '0px 0px 10px 1px rgba(0, 26, 102, 0.1'}} 
      animate={{boxShadow: shadowPattern == 'signLink1' ? '0px 0px 15px 2px rgba(255, 255, 255, 1' : '0px 0px 15px 2px rgba(0, 55, 102, 1'}} 
      transition={{duration: 2, repeat: Infinity, repeatType:'reverse', ease: 'linear'}} 
      className={pattern}>
        
        {children}
      </motion.button >
    </Link>
  )
}
