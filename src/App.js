import React, {Component} from "react";

import './styles.css';

import Header from './components/Header';

import Srcbar from "./components/Srcbar";

import Info from './components/Info'

import MovieList from './components/MovieList';

import Pagination from './components/Pagination';


//conceito basico de props
class App extends Component {
  constructor(){
    super()
    this.state={
      movies:[],
      searchTerm:'',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
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
    this.setState({ movies:[...data.results], totalResults: data.total_results})
  })
}


//o handleC captura as mudanças que ocorrem na barra
handleChange = (e)=> {
this.setState({ searchTerm: e.target.value })
}

viewMovieInfo = (id) => {
  let filteredMovie;
  this.state.movies.forEach((movie,i) => {
    if(movie.id == id) {
      filteredMovie = movie
    }
  }) 

  this.setState({ currentMovie: filteredMovie })  
}



nextPage = (pageNumber) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
  .then(data => data.json())
  .then(data =>{
    //operador ... faz com que o data.results salve na array movies
    //os valores obtidos na requisição. 
    console.log(data);
    this.setState({ movies:[...data.results], currentPage: pageNumber })
})
}
  render(){
    const numberPages = Math.floor(this.state.totalResults/20);
    

    return (
      <div className = "App" >
      <Header />
      {this.state.currentMovie == null ? <div><Srcbar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <Info currentMovie={this.state.currentMovie} />}
      {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      </div >
    )
  }
}
 
export default App;
