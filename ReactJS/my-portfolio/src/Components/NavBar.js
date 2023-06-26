import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react'

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handelClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

  return (
    <div className={ color ? "header header-bg" : "header" }>
        <Link to='/'>
            <img src='portfolio.png' alt=''/>
        </Link>
        <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/certificate'>Certification</Link>
            </li>
            <li>
                <Link to='/achievement'>Achievements</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
        <div className='hamburger' onClick= {handelClick}> 
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
        </div>
    </div>
  )
}

export default NavBar
