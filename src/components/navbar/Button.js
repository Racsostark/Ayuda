import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button() {
  return (
    <Link to='/'>
        <button className='btn'>Acceso</button>
    </Link>
  )
}
