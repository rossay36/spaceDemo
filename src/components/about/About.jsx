import React from 'react'
import './about.css'
import man5 from '../../assets/man5.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__column'>
          <img src={man5} alt='' />
        </div>
        <div className='about__columns'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan libero ac tincidunt luctus. Interdum et malesuada fames ac ante
          </span>
        </div>
      </div>
    </div>
  )
}

export default About