import React from 'react';
import Cartao from '../Cartao';

const MovieList = (props) => (
<div className="container">
    <div className="row">
      <div className="col">
        {
         props.movies.map((movie,i) => {
            return (
             <Cartao key={i} image={movie.poster_path} titulo={movie.original_title} data={movie.release_date} populariade={movie.vote_average} descricao={movie.overview}/>
            )
        })
        }
      </div>
    </div>
  </div>

);


export default MovieList