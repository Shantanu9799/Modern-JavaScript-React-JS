import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react'

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handelClick = () => setClick(!click);

  return (
    <div className='header'>
        <Link to='/'>
            <img src='portfolio.png' alt=''/>
        </Link>
        <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
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
        <div className='hamburger' onClick= {handelClick}> 
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
        </div>
    </div>
  )
}

export default NavBar
