import React from 'react'
import './SignUp.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import seat from '../../assets/seat.jpg'


const SignUp = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <form className='login__form'>
          <h1>Sign Up</h1>
          <input type='text' placeholder='Enter your Name' /><br />
          <input type='email' placeholder='you@example.com' /><br />
          <input type='text' placeholder='UserName' /><br />
          <div className='login__password'>
          <input type='password' placeholder='Password' /><br />
          <input type='password' placeholder='Repeat Password' /><br />
          </div>
          <div className='login__check'>
            <input type='checkbox' />
            <p>Agree with the terms and condition</p>
          </div>
          <div className='login__hr'>
             <button>LOGIN</button>
              <span>Sign in</span>
            </div>
        </form>
        <div>
          <img src={seat} alt='' />
        </div>
      </div>
    </div>
  )
}

export default SignUp