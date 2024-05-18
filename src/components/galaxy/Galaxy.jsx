import React from 'react'
import './Galaxy.css'

const Galaxy = () => {
  return (
    <div className='galaxy'>
      <div className='galaxy__container'>
        <h3>Lorem ipsum dolor sit ame</h3>
        <h1>#Loremconse ctetur ipsum dolor </h1>
        <div className='galaxy__span'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit dolor sit</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit </span>
        </div>
        <button>Lorem ipsum</button>
        <div className='galaxy__down'>
          <a href='' className='gal__a'>ipsum dolor sit amet</a>
          <a href='' className='gal__a'>ipsum dolor sit amet</a>
          <a href='' className='gal__a'>ipsum dolor sit amet</a>
        </div>
      </div>
    </div>
  )
}

export default Galaxy