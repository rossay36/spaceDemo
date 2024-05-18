import React, { useState } from 'react'
import { GiTeamUpgrade, GiDigitalTrace } from 'react-icons/gi'

import './Sidebar.css'
import { data } from '../../dummyData'

const Sidebar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className={click ? 'sidebar sidebar' : 'sidebar sidebar-NX'}>
      <div className='sidebar__container'>
        <div className='sidebar__logo'>
          {/* {click&& <GiDigitalTrace />} */}
          {click&& <h1>DIGITAL</h1>}
          <button className={click ? 'sidebar__hamburger sidebar__hamburger-in' : 'sidebar__hamburger sidebar__hamburger-out'} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {data.map((data, index) => (
            <div className={click ? 'sidebar__list sidebar__list' : 'sidebar__list sidebar__list-NX'} key={data.id} >
              <span className='sidebar__spans'>{data.icon }</span>
             {click && <span className='sidebar__span'>{data.name}</span>}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar