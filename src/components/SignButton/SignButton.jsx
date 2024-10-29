import React from 'react'

export default function SignButton({ children, pattern }) {
  // pattern 1 - branco (banner)
  // patern 2 - Azul (página)
  return (
    <button className={pattern}>
      {children}
    </button>
  )
}
