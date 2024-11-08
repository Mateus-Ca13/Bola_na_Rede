import React from 'react'
import { Link } from 'react-router-dom'

export default function SignLink({ children, pattern }) {
  // signButton1 - branco (banner)
  // signButton2 - Azul (página)
  return (
    <Link to={'/login'}>
      <button className={pattern}>
        {children}
      </button>
    </Link>
  )
}
