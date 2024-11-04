import React from 'react'
import { Link } from 'react-router-dom'

export default function SignButton({ children, pattern }) {
  // pattern 1 - branco (banner)
  // patern 2 - Azul (página)
  return (
    <Link to={'/login'}>
      <button className={pattern}>
        {children}
      </button>
    </Link>
  )
}
