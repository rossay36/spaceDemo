import { SiGnuprivacyguard, } from 'react-icons/si'
import { GiTeamUpgrade, GiDigitalTrace } from 'react-icons/gi'
import { CgProfile, } from 'react-icons/cg'
import { AiOutlineProfile, AiOutlineLogin, } from 'react-icons/ai'
import {FcContacts, } from 'react-icons/fc'
import { MdEmojiPeople, MdOutlineProductionQuantityLimits, } from 'react-icons/md'
import { FaBookOpen, FaHome, FaPeopleCarry, FaUserGraduate } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import lady1 from './assets/lady1.jpg'

export const data = [

    {
        id: 1,
        icon: <Tippy content='Home'><Link to='/'><FaHome /></Link></Tippy>,
        name: <Tippy content='Home'><Link to='/'>Home</Link></Tippy>
    },
    {
        id: 2,
        icon: <Tippy content='About'><Link to='/about'><FaBookOpen /></Link></Tippy>,
        name: <Tippy content='About'><Link to='/about'>Abouts</Link></Tippy>
    },
    {
        id: 3,
        icon: <Tippy content='MarketPlace'><Link to='/checkmarket'><FaPeopleCarry /></Link></Tippy>,
        name: <Tippy content='MarketPlace'><Link to='/checkmarket'>Checkmarket</Link></Tippy>
    },
    {
        id: 4,
        icon: <Tippy content='Go to content'><Link to='/checkme'><MdEmojiPeople /></Link></Tippy>,
        name: <Tippy content='Go to content'><Link to='/checkme'>Checkme</Link></Tippy>
    },
    {
        id: 5,
        icon: <Tippy content='Gossip'><Link to='/checkprofile'><AiOutlineProfile /></Link></Tippy>,
        name: <Tippy content='Gossip'><Link to='/checkprofile'>Checkprofile</Link></Tippy>
    },
    {
        id: 6,
        icon: <Tippy content='Contact'><Link to='/contacts'><FcContacts /></Link></Tippy>,
        name: <Tippy content='Contact'><Link to='/contacts'>Contacts</Link></Tippy>
    },
    // {
    //     id: 7,
    //     icon: <Tippy content='Checkprofile'><Link to='/checkprofile'><AiOutlineProfile /></Link></Tippy>,
    //     name: <Tippy content='Checkprofile'><Link to='/checkprofile'>Abouts</Link></Tippy>
    // },
    {
        id: 8,
        icon: <Tippy content='Login'><Link to='/login'><AiOutlineLogin /></Link></Tippy>,
        name: <Tippy content='Login'><Link to='/login'>Login</Link></Tippy>
    },
    {
        id: 9,
        icon: <Tippy content='Products'><Link to='/Products'><MdOutlineProductionQuantityLimits /></Link></Tippy>,
        name: <Tippy content='Products'><Link to='/products'>Products</Link></Tippy>
    },
    {
        id: 10,
        icon: <Tippy content='Profile'><Link to='/profile'><CgProfile /></Link></Tippy>,
        name: <Tippy content='Profile'><Link to='/profile'>Profile</Link></Tippy>
    },
    {
        id: 11,
        icon: <Tippy content='Sign Up'><Link to='/signUps'><SiGnuprivacyguard /></Link></Tippy>,
        name: <Tippy content='Sign Up'><Link to='/signUps'>SignUps</Link></Tippy>
    },
    {
        id: 12,
        icon: <Tippy content='Our team'><Link to='/team'><GiTeamUpgrade /></Link></Tippy>,
        name: <Tippy content='Our team'><Link to='/team'>Team</Link></Tippy>
    },
    {
        id: 13,
        icon: <Tippy content='Testimonial'><Link to='/testimonial'><FaUserGraduate /></Link></Tippy>,
        name: <Tippy content='Testimonial'><Link to='/testimonial'>Testimonial</Link></Tippy>
    },
]

export const team = [
    {
        id: 1,
        imgUrl: lady1,
        surname: 'Michelle',
        name: 'Chu',
        title: 'DIRECTOR OF TECHNOLOGY'
    },
    {
        id: 1,
        imgUrl: lady1,
        surname: 'Michelle',
        name: 'Chu',
        title: 'DIRECTOR OF TECHNOLOGY'

    },
    {
        id: 1,
        imgUrl: lady1,
        surname: 'Michelle',
        name: 'Chu',
        title: 'DIRECTOR OF TECHNOLOGY'

    },
    {
        id: 1,
        imgUrl: lady1,
        surname: 'Michelle',
        name: 'Chu',
        title: 'DIRECTOR OF TECHNOLOGY'

    },
    {
        id: 1,
        imgUrl: lady1,
        surname: 'Michelle',
        name: 'Chu',
        title: 'DIRECTOR OF TECHNOLOGY'

    },
]