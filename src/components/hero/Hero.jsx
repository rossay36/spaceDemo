import React, { useRef } from 'react'
import './Hero.css'
import { Galaxy, Gallax, Univers, Sidebar } from '../../components'
import { Carousel } from 'antd'

const Hero = () => {
  const ref = useRef()
  return (
    <div className='hero'>
      <div className='hero__container'>
        <Sidebar  />
        <div className='hero__car'>
          <Carousel
            autoplay
            dotPosition='top'
            pauseOnHover={true}
            draggable={true}
            pauseOnDotsHover={true}
            ref={ref}
            effect='fade'
          >
            <Galaxy />
            <Gallax />
            <Univers />
          </Carousel>
           <div className='hero__button'>
          <button onClick={() => {ref.current.prev()}}>Prev</button>
          <button onClick={() => {ref.current.goTo(0)}}>Reset</button>
          <button onClick={() => {ref.current.next()}}>Next</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Hero