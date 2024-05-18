import React from 'react'
import { FiTwitter, FiFacebook, FiYoutube, } from 'react-icons/fi'
import { BsWhatsapp,BsWifi } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>

        <div className='footer__column'>

        <div className='footer__columns'>
          <h2>Sign Up To Contact Us</h2>
          <div className='footer__input'>
            <input type='email' placeholder='Email Address' />
            <p>GO..</p>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus.
          </span>
        </div>

        <div className='foot__columns'>
          <div className='box'>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum </p>
            <p>Lorem  dolor</p>
            <p> ipsum dolor</p>
            <p>Lorem ip dolor</p>
            <p>Loremsum dol</p>
            <p>Lor ipsumlor</p>
            <p>ipsum lor</p>
            <p>Lor dolor</p>
          </div>
          <div className='box'>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum </p>
            <p>Lorem  dolor</p>
            <p> ipsum dolor</p>
            <p>Lorem ip dolor</p>
            <p>Loremsum dol</p>
            <p>Lor ipsumlor</p>
            <p>ipsum lor</p>
            <p>Lor dolor</p>
          </div>
          <div className='box'>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum </p>
            <p>Lorem  dolor</p>
            <p> ipsum dolor</p>
            <p>Lorem ip dolor</p>
            <p>Loremsum dol</p>
            <p>Lor ipsumlor</p>
            <p>ipsum lor</p>
            <p>Lor dolor</p>
          </div>
        </div>
        </div>

        <div className='footer__bottom'>
          <span>Lorem ipsum dolor</span>

          <span>1.4565 Lorem Ipsum</span>

          <div>
            <span>ipsum dolo</span>
          </div>

          <span>ipsumdolo</span>

          <span> dolo</span>
          <div className='footer__icon'>
            <FiTwitter />
            <BsWifi />
            <FiFacebook />
            <BsWhatsapp />
            <FiYoutube />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer