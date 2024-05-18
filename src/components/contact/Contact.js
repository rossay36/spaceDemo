import React from 'react'
import './Contact.css'
import {GrLocation} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
import {FaFax} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__box'>
          <div className='contact__boxes'>
            <GrLocation className= 'contact__icon' />
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolo New york 1234</p>
          </div>
          <div className='contact__boxes'>
            <FiPhoneCall className='contact__icon' />
            <p>Lorem ipsum</p>
            <p>2534-5836-58736</p>
            <p>2534-5836-58736(toll free)</p>

          </div>
          <div className='contact__boxes'>
            <FaFax className='contact__icon' />
            <p>Lorem ipsum</p>
            <p>263-46387-5847</p>
          </div>
          <div className='contact__boxes'>
            <AiOutlineMail className='contact__icon' />
            <p>Lorem ipsum</p>
            <p>obi75309@gmail.com</p>
          </div>
        </div>
        <div className='contact__input'>
          <h2 className='contact__h2'>Contact Us</h2>
          <input type='text' placeholder='Enter your Number' />
          <input type='email' placeholder='Enter a valid Email Address' />
          <textarea type='tex' placeholder='how can we help you' /><br/>
          <input className='contact__button' type='submit' placeholder='Submit' />
        </div>
      </div>
    </div>
  )
}

export default Contact