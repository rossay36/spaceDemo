import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Ancodians.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import lady2 from '../../assets/lady2.jpg'

const Ancodians = () => {

    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active)

  return (
      <div className='ancod'>
          <div className='ancod__container'>
              <div className='ancod__button' onClick={handleActive}>
               <Link to='/'><button>BACK</button></Link>
              </div>
              <div className={active ? 'ancod__content active' : "ancod__content ancod__content-NX" }>
                  <div className='ancod__first'>
                      <div className='ancod__first-box'>
                          <img src={lady2} alt='' />
                      </div>
                      <div className='ancod__first-box'>
                          <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae neque sit amet velit auctor scelerisque. Nulla quam dolor, volutpat sed vestibulum nec, rutrum eu justo. Aenean nisi leo, malesuada facilisis nunc eu, lacinia luctus nulla. Sed nec augue eget libero aliquet viverra. Phasellus volutpat lectus ac lorem feugiat interdum. Donec vestibulum luctus lectus, vitae vestibulum lacus pulvinar non. Sed
                          </span>
                      </div>
                  </div>
                  <div className='ancod__second'>
                      <div className='ancod__second-span'>

                            <span>
                                rutrum tristique purus, at dictum neque lacinia vel. Donec fermentum in purus sed dictum. Vivamus consectetur imperdiet velit, quis eleifend magna. Maecenas sit amet sapien id odio tempor commodo sit amet nec nisi. Sed congue tellus in enim venenatis sollicitudin.
                            </span>
                            <span>
                                rutrum tristique purus, at dictum neque lacinia vel. Donec fermentum in purus sed dictum. Vivamus consectetur imperdiet velit, quis eleifend magna. Maecenas sit amet sapien id odio tempor commodo sit amet nec nisi. Sed congue tellus in enim venenatis sollicitudin.
                            </span>
                            <span>
                                rutrum tristique purus, at dictum neque lacinia vel. Donec fermentum in purus sed dictum. Vivamus consectetur imperdiet velit, quis eleifend magna. Maecenas sit amet sapien id odio tempor commodo sit amet nec nisi. Sed congue tellus in enim venenatis sollicitudin.
                            </span>
                        </div>
                      <div className='ancod__title'>
                           <img src={lady2} alt='' />
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae neque sit amet velit auctor scelerisque. Nulla quam dolor, volutpat sed vestibulum nec, rutrum eu justo. Aenean nisi leo, malesuada facilisis nunc eu, lacinia luctus nulla. Sed nec augue eget libero aliquet
                           </span>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Ancodians

