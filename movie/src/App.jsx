import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SearchedMoviePage from './pages/SearchedMoviePage'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/UpcomingPage'
import MovieDetails from './components/MovieDetails'


function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/top-rated' element={<TopRatedPage/>}/>
        <Route path='/searched-movie' element={<SearchedMoviePage/>}/> 
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/upcoming-Page' element={<UpcomingPage/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App

