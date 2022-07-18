import React, { useState, useEffect } from "react";

function Movies({movies, handleWishList, handleFavorite}){
    const [movieList, setMovieList] = useState([])
    const [watched, setWatched] = useState(false);

    handleFavorite(movieList)
  

    function handleWatched(mvid){
        setWatched((watched)=> !watched)

    }
 

    const myMovies = movies.map((movie)=>
    
    // <img src={movie.posterUrl}>{}</img>
    //<img src={movie.posterUrl} alt="Movie Poster" style="width:100%">{}</img>
  
    <div className="card" key={movie.posterUrl}>
  <img src={movie.posterUrl}>{}</img>
  <h2>{movie.title}</h2>
  <button className={watched ? "watched" : ""}onClick={handleWatched} id="myWatched">Watched</button>
  <p>{movie.plot}</p>
  <p><button onClick={handleWishList}>Add to Wish List</button></p>
  <p><button onClick={() => setMovieList(movie)}>Add to Favorite</button></p>
</div>
    )
    
    return (<div>
        {myMovies}

    </div>)
}
export default Movies;