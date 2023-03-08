import { useEffect, useState } from "react";
import "./App.css"
import { Title } from "./Componentes/Titulo";
import { Searchbar } from "./Componentes/Search Bar";
import { Subtitle } from "./Componentes/Subtitulo";
import axios from "axios";
import { CardPoster } from "./Componentes/Card";

function App() {
  const [movie, setMovie] = useState()

  function actMovieSearch(title) {
    axios.get(`http://www.omdbapi.com/?apikey=6583af3e&t=${title}`)
      .then((response) => {
        console.log(response.data)
        setMovie(response.data)
      })
  }


  return (

    <div className="main-container">
      <hr></hr>
      <Title />
      <Subtitle />
      <Searchbar searchMovie={actMovieSearch} />
      {movie &&
        <CardPoster title={movie.Title} plot={movie.Plot} actors={movie.Actors}
          poster={movie.Poster} genre={movie.Genre} />
      }
    </div>

  );

}





export default App