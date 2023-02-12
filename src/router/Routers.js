

import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home'
import Tour from './../pages/Tour'
import Contact from './../pages/Contact'
import About from './../pages/About'
import TourDetails from './../pages/TourDetails'
import SearchResultList from './../pages/SearchResultList'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tour/:id' element={<TourDetails/>}/>
        <Route path='/tour/search' element={<SearchResultList/>}/>
    </Routes>
  )
}

export default Routers