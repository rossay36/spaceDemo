import React from 'react'
import './Teams.css'
import {team} from '../../dummyData'

const Teams = () => {
  return (
    <div className='team'>
      <div className='team__container'>
        <div className='team__title'>
        <h1>Meet the team.</h1>
        <div className='team__p'>
          <p>consectetur</p>
          <p>sectetur</p>
          <p>conset</p>
          <p>constur</p>
          <p>conse ctetur</p>
          <p>ectetur</p>
          <p>cons</p>
          </div>
        </div>
        <div className='team__lists'>
        {team.map((team, index) => (
          <div className='team__list' key={index}>
            <img src={team.imgUrl} alt='' className='team__img' />
            <p>{team.surname }</p>
            <p>{team.name}</p>
            <h5>{team.title }</h5>

          </div>
        ))}
        {team.map((team, index) => (
          <div className='team__list' key={index}>
            <img src={team.imgUrl} alt='' className='team__img' />
            <p>{team.surname }</p>
            <p>{team.name }</p>
            <h5>{team.title }</h5>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Teams