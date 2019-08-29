import React, {Component} from "react";

import './styles.css';

import Header from './components/Header';

import Srcbar from "./components/Srcbar";

import MovieList from './components/MovieList'


//conceito basico de props
class App extends Component {
  constructor(){
    super()
    this.state={
      movies:[],
      searchTerm:''
    }
    //ENCAPSULAMENTO DA API POR SEGURANÇA
    this.apiKey = process.env.REACT_APP_API
  }
  // e é um evento padrão para capturar mudanças de estado da SearchBar
  //o handleS envia a requisição recebendo a apiKEY e o termo de procura
handleSubmit =(e) => {
  e.preventDefault();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=pt-BR}`)
  .then(data => data.json())
  .then(data =>{
    //operador ... faz com que o data.results salve na array movies
    //os valores obtidos na requisição. 
    console.log(data);
    this.setState({ movies:[...data.results]})
  })
}

//o handleC captura as mudanças que ocorrem na barra
handleChange = (e)=> {
this.setState({ searchTerm: e.target.value })
}
  render(){
    return (
      <div className = "App" >
        <Header />
        <Srcbar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
      </div >
    )
  }
}


export default App;
