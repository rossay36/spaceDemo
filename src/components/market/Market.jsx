import React, {useState} from 'react'
import './Market.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsEmojiExpressionless } from 'react-icons/bs'
import lady4 from '../../assets/lady4.jpg'
import desktop3 from '../../assets/desktop3.jpg'
import { Link } from 'react-router-dom'

const Market = () => {

    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active)

  return (
      <div className='market'>
        <div className='market__container'>
          <div className='market__button' onClick={handleActive}>
           <Link to='/'><button>BACK</button></Link>
          </div>
            <div className={active ? 'market__column active' : " market__column-NX"}>
          <div className='market__top'>
            <div className='market__first'>
                <h1>YOU NEED LEEDS...</h1>
                  <span className='span'>
                   Lorem ipsum dolor sit amet, consectetur <span> (adipiscing elit.)</span>
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consecter adipiscing
                  </span>
                 <div className='market__buttons'>
                    <button>G.R.O.W Leeds system</button>
                    <button>STORY Selling Video</button>
                    <button>A-2-Z Digital Business</button>
                  </div>
            </div>
            </div>
              <div className='market__center'>
                <div className='market__img'>
                  <img src={desktop3} alt='' />
                </div>
                {/* <h1>G.R.O.W. LEEDS SYSTEM</h1> */}
                <div className='market__col'>
                  <h1>G.R.O.W. Lead system</h1>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ante vel fermentum dapibus. In ornare tellus arcu, nec lobortis ligula accumsan vel.
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ante vel fermentum dapibus. In ornare tellus arcu, nec lobortis ligula accumsan vel.
                  </span>
                  <div className='market__btn'>
                    <button>Learn more</button>
                  </div>
                </div>

                </div>
              <div className='market__bottom'>
                  <h1>STORY Selling Video broacast system</h1>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ante vel fermentum dapibus. In ornare tellus arcu, nec lobortis ligula accumsan vel. Donec vel viverra justo. Phasellus vitae rhoncus nibh. Morbi luctus metus dolor, imperdiet mollis purus
                   </span>
              </div>
           </div>
        </div>
      </div>
  )
}

export default Market