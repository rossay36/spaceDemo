import React, {useState} from 'react'
import './Ancodian.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsEmojiExpressionless } from 'react-icons/bs'
import lady4 from '../../assets/lady4.jpg'
import { Link } from 'react-router-dom'

const Ancodian = () => {

    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active)

  return (
    <div className='code'>
        <div className='code__container'>
            <div className='code__button' onClick={handleActive}>
               <Link to='/'><button>BACK</button></Link>
            </div>
            <div className={active ? 'code__column active' : " code__column-NX"}>
                <div className='code__boxes'>
                    <div className='code__box1'>
                        <h1>Building Digital <br /> Product, Brand</h1>
                        <div className='code__exp'>
                            <BsEmojiExpressionless />
                              <h1>Experience</h1>
                        </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae neque sit amet velit auctor scelerisque. Nulla quam dolor, volutpat sed
                            </span>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <h3>Lorem ipsum dolor sit amet</h3>
                         <div className='code__btn'>
                            <h6> Lorem ipsum</h6>
                            <Link to='/profile'><button>View main profile</button></Link>
                        </div>
                    </div>
                    <div className='code__box'>
                        <img src={lady4} />
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ancodian

