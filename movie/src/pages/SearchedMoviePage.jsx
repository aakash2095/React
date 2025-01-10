import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';  //gives current url/path
import Moviecard from '../components/MovieCard';



const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

//&language=en-US&page=1 => Query Paramenter
// <int:id> => Body parameter

function usequery(){
  return new URLSearchParams(useLocation().search)
}


const SearchedMoviePage = () => {

  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(true)

  const query = usequery().get('query');  // search?query=Wakeupsid
  


  
  return (
    <div>SearchedMoviePage</div>
  )
}

export default SearchedMoviePage