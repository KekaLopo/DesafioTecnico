import React from 'react';

import "./styles.css";

const Cartao = (props) => (


  <div id="main-div">
     <div id="divtexto">{
       //um if em que se o resultado de algum dos posters for NULL ele resolve com uma foto se nao segue com a Thumb normal
      props.image == null ?<img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image"/> 
        : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"/> 
     }
              <div id="titulo"><font size="6">{props.titulo}</font></div>
        <div id="pontos">{props.populariade}%</div>  
        <div id="data">{props.data}</div> 
        <div id="sinopse"> <p id="sinopse2">{props.descricao}</p> </div>
      </div>

      </div> 
);

export default Cartao; 


