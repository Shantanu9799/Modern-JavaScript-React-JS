import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
const NavBar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>My Portfolio</h1>
        </Link>
        <ul className='Nav-menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger'>
            <FaBars size={20} style={{color: '#fff'}} />
        </div>
    </div>
  )
}

export default NavBar