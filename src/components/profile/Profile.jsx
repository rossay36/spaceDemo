import React from 'react'
import { HiOutlineComputerDesktop, HiComputerDesktop } from 'react-icons/hi'
import { GrPersonalComputer } from 'react-icons/gr'
import { RiComputerLine } from 'react-icons/ri'
import './Profile.css'
import lady1 from '../../assets/lady1.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__title'>
          <h1>Who Am I?</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est orci</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing </span>
        </div>
        <div className='profile__columns'>
          <div className='profile__prof'>
            <img src={lady1} alt='' />
            <h3>I am happy to know   succefully</h3>
            <h3>you that 300+</h3>
            <h3>project done</h3>
            <h3>succefully!</h3>
            <button>learn more</button>
          </div>
          <div className='profile__box'>
            <div className='profile__boxs'>
              <GrPersonalComputer className='profile__icon' />
              <h3>Graphics Design</h3>
              <p>dolor sit amet</p>
            </div>
            <div className='profile__boxs'>
              <GrPersonalComputer className='profile__icon' />
              <h3>Graphics Design</h3>
              <p>dolor sit amet</p>
            </div>
            <div className='profile__boxs'>
              <GrPersonalComputer className='profile__icon' />
              <h3>Graphics Design</h3>
              <p>dolor sit amet</p>
            </div>
            <div className='profile__boxs'>
              <GrPersonalComputer className='profile__icon' />
              <h3>Graphics Design</h3>
              <p>dolor sit amet</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile