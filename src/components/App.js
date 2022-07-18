

import About from './About';
import Home from './Home';
import NavBar from './NavBar'
import Watched from './Watched';
import Towatch from './Towatch';
import Movies from './Movies';
import React, { useState, useEffect } from "react";
import {
  Routes,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorite from './Favorite';


export default function App() {
  const [movies, setMovies] = useState([])
  const [favMovie, setFavMovie] = useState([])

  function handleFavorite(mv){
    fetch("http://localhost:3000/favorite", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mv),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
})
    
  }


  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => {
        setMovies(data)
    })
    
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/favorite")
    .then(res => res.json())
    .then(data => {
      setFavMovie(data)
    })
    
  }, []);

  return (
    <div>
    <Router>
      <div>
        <header id='header'>My Movie Collection</header>
      <NavBar id="nav"/>
      

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies movies={movies} handleFavorite={handleFavorite}/>}>
          </Route>
          <Route path="/watched" element={<Watched movies={movies}/>}>
            
          </Route>
          <Route path="/towatch" element={<Towatch />}>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/favorite" element={<Favorite favMovie={favMovie} />}>
            
          </Route>
          
          
        </Routes>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <footer>
              <li>
              <Link to="/About">About</Link>
            </li>
      </footer>
      </div>

      
    </Router>
    </div>
    
  );
}
