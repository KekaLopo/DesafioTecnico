import React from 'react';
import Cartao from '../Cartao';


const MovieList = (props) => (

<div className="container">
    <div className="row">
      <div className="col">
        {props.movies.map((movie,i) => {
          //funçao para foramtar a data
          let data1 = movie.release_date
          let dateSlices = data1.split('-');
         let date = dateSlices[2] + '/' + dateSlices[1] + '/' + dateSlices[0]
            return (
             <Cartao key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} titulo={movie.title} data={date} populariade={movie.vote_average} descricao={movie.overview}
             data1={movie.date}
             />
            )
        })
        }
      </div>
    </div>
  </div>

);
  





export default MovieList