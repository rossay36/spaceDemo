import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu, } from 'react-icons/gi'
import { FaTimes, } from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)
  return (
    <div className='nav'>
      <div className='nav__container'>

        <div className='nav__logo'>
          <h3>#Explore Digital&Marketing</h3>
        </div>

         <ul className= 'nav-list '>

          <li  ><Link to='/' className='nav__link'>Home</Link></li>
              <div className='nav__about' >
                <li><Link to='/abouts' className='nav__link'>Abouts</Link></li>
                <Link className='nav_icon' to='/checkme'><MdOutlineKeyboardArrowDown className='ancod__icon' /></Link>
              </div>
              <li><Link to='/contacts' className='nav__link'>Contacts</Link></li>
              <div className='nav__pro' >
                <li><Link to='/profiles' className='nav__link'>Profiles</Link></li>
                <Link className='nav_icon' to='/checkprofile'><MdOutlineKeyboardArrowDown className='ancod__icon' /></Link>
              </div>
                <li><Link to='/team' className='nav__link'>Team</Link></li>
              <div className='nav__prod'>
                <li><Link to='/products' className='nav__link'>Products</Link></li>
                <Link className='nav_icon' to='/checkmarket'><MdOutlineKeyboardArrowDown className='ancod__icon' /></Link>
              </div>
              <li><Link to='/testimonial' className='nav__link'>testimonial</Link></li>
        </ul>

        <ul className={toggle ? 'nav-menu  active' : 'nav-menu'}>

          <li  ><Link to='/' className='nav__link'>Home</Link></li>
              <div className='nav__about' >
                <li><Link to='/abouts' className='nav__link'>Abouts</Link></li>
                <Link className='nav_icon' to='/checkme'><MdOutlineKeyboardArrowDown className='ancod__icon' onClick={handleToggle} /></Link>
              </div>
              <li><Link to='/contacts' className='nav__link'>Contacts</Link></li>
              <div className='nav__pro' >
                <li><Link to='/profiles' className='nav__link'>Profiles</Link></li>
                <Link className='nav_icon' to='/checkprofile'><MdOutlineKeyboardArrowDown className='ancod__icon'  onClick={handleToggle} /></Link>
              </div>
                <li><Link to='/team' className='nav__link'>Team</Link></li>
              <div className='nav__prod'>
                <li><Link to='/products' className='nav__link'>Products</Link></li>
                <Link className='nav_icon' to='/checkmarket'><MdOutlineKeyboardArrowDown className='ancod__icon'  onClick={handleToggle} /></Link>
              </div>
              <li><Link to='/testimonial' className='nav__link'>testimonial</Link></li>
        </ul>
        <button className='hamburger' onClick={handleToggle}>
          {toggle ? (<GiHamburgerMenu/> ) : (<FaTimes />)}
        </button>
      </div>
   </div>

  )
}

export default Navbar