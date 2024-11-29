import React from 'react'
import { Link } from 'react-router-dom'

export default function SignLink({ children, pattern }) {
  // signLink1 - branco (banner)
  // signLink2 - Azul (página)
  return (
    <Link to={'/login'}>
      <button className={pattern}>
        {children}
      </button>
    </Link>
  )
}
