import React from 'react'
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import seat from '../../assets/seat.jpg'


const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <form className='login__form'>
          <h1>Login</h1>
          <p>Doesn't have an account yet? <span style={{color:'blue'}}>SignUp</span></p>
          <input type='email' placeholder='you@example.com' /><br />
          <div className='login__password'>
           <span style={{color:'blue'}}>Forgotten Password?</span>
          <input type='password' placeholder='Enter 6 characters or more' /><br />
          </div>
          <div className='login__check'>
            <input type='checkbox' />
            <p>Remember me</p>
          </div>
          <button>LOGIN</button>
          <div className='login__hr'>
             <hr />
             <p>or Login with</p>
             <hr />
            </div>
            <div className='login__button'>
              <div className='login__box'>
                <FcGoogle className='login__icon' />
                <h3>Google</h3>
              </div>
              <div className='login__box'>
                <FaFacebookF className='login__icon  log__icon' />
                <h3>Facebook</h3>

            </div>
          </div>

        </form>
        <div>
          <img src={seat} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Login