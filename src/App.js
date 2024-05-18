import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Abouts,Products,Profiles,SignUps,Logins,Team,Testimonial,Contacts,Checkmarket,Checkme,Checkprofile } from './pages'
import './App.css'

const App = () => {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abouts' element={<Abouts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/signUps' element={<SignUps />} />
          <Route path='/logins' element={<Logins />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/checkme' element={<Checkme />} />
          <Route path='/checkmarket' element={<Checkmarket />} />
          <Route path='/checkprofile' element={<Checkprofile />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App