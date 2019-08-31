import React from 'react';

import "./styles.css";



const Info = (props) =>( 
  <div>    
    <div id='Card1'>
    <div id='titulo1'> <font size="6" color="#116192" ><p>{props.currentMovie.title}</p> <p id='data1'>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(1, 4)).join("/")}</p></font>  </div>
    {props.currentMovie.poster_path == null ? <img id={'fotofilme'} src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}/> :
     <img id={'fotofilme'} src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}/>} 
     
    <div id ='sinopse1'><font size="5" color="#116192"  >Sinopse</font></div>
    <div id='corpo1'> <p>{props.currentMovie.overview}</p></div>
    <div id='informacao1'> <font size="5" color="#116192"  >Informações</font></div>
    <div id='corpo2'> <p id='ptexto1'>Situacao <br/> <p id='btexto2'> {props.currentMovie.status}</p> </p> </div>
    <div id='corpo2'> <p id='ptexto1'>Idioma <br/> <p id='btexto2'>{props.currentMovie.original_language}</p></p> </div>
    <div id='corpo2'> <p id='ptexto1'>Duração <br/> <p id='btexto2'>{props.run}</p></p> </div>
    <div id='corpo2'> <p id='ptexto1'>Orçamento <br/> <p id='btexto2'>{props.currentMovie.budget}</p></p> </div>
    <div id='corpo2'> <p id='ptexto1'>Receita <br/> <p id='btexto2'>{props.currentMovie.revenue}</p></p> </div>
    <div id='corpo2'> <p id='ptexto1'>Lucro <br/> <p id='btexto2'>{props.currentMovie.revenue - props.currentMovie.budget}</p></p> </div>
    <br></br>
    <button id='buttons1'>{props.currentMovie.genres}</button>
    <button id='buttons1'>Aventura</button>
    <button id='buttons1'>Comedia</button>  
    <div id='circulo1'>{props.currentMovie.vote_average}%</div>
    </div>
    <div id='Trailer'>
    <video  >
  <source src={`https://api.themoviedb.org/3/movie/${props.currentMovie.id}/videos?api_key=ac0d56d63c69a4d0e65bed1653ae82cf&language=en-US`}>
  </source>
</video>
    </div>
  </div>


);
export default Info;