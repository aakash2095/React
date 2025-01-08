import React from 'react'
import { Link } from 'react-router-dom'


const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const Moviecard = ({movie}) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
      <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>IMDb Rating : {movie.vote_average}</p>
      </Link>
      <hr/><br />
    </div>
  )
}

export default Moviecard