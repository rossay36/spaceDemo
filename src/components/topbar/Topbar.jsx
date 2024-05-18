import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar__container'>
            <div className='topbar__logo'>
                <h2>Digital&Marketing</h2>
                    <div className='topbar__input'>
                        <input type='text' placeholder='search' />
                        <BsSearch className='left-icon' />
                </div>
              </div>
               <ul className='topbar__ul-list'>
                <li><Link to='/' className='topbar__link'>What's Next</Link></li>
                <li><Link to='/logins' className='topbar__link'>Login</Link></li>
                <li><Link to='/signUps' className='topbar__link'>SignUp</Link></li>
                <div className='top__post'>
                  <li><Link to='/' className='topbar__link'>POST A JOB</Link></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Topbar