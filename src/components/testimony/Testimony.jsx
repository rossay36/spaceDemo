import React from 'react'
import './Tesimony.css'
import lady1 from '../../assets/lady1.jpg'

const Testimony = () => {
  return (
    <div className='testimony'>
      <div className='testimony__container'>
        <div className='testimony__column'>
          <img src={lady1} alt='' className='testimony__img' />
          <h2>Serena Willaims</h2>
          <p>American Professional Tennia player</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est orci, eleifend eget ante et, condimentum luctus dolor. Nunc faucibus varius tempus. Donec neque nibh, pharetra nec accumsan sed, fringilla sed nunc. Etiam pulvinar velit in lacus volutpat venenatis. In hendrerit venenatis semper
          </p>
        </div>
        <div className='testimony__column'>
          <img src={lady1} alt='' className='testimony__img' />
          <h2>Serena Willaims</h2>
          <p>American Professional Tennia player</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est orci, eleifend eget ante et, condimentum luctus dolor. Nunc faucibus varius tempus. Donec neque nibh, pharetra nec accumsan sed, fringilla sed nunc. Etiam pulvinar velit in lacus volutpat venenatis. In hendrerit venenatis semper
          </p>
        </div>
        <div className='testimony__column'>
          <img src={lady1} alt='' className='testimony__img' />
          <h2>Serena Willaims</h2>
          <p>American Professional Tennia player</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est orci, eleifend eget ante et, condimentum luctus dolor. Nunc faucibus varius tempus. Donec neque nibh, pharetra nec accumsan sed, fringilla sed nunc. Etiam pulvinar velit in lacus volutpat venenatis. In hendrerit venenatis semper
          </p>
        </div>

      </div>
    </div>
  )
}

export default Testimony