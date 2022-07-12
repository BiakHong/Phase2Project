import React from "react";

function Favorite({favMovie}){ 
//     const myMovies = favMovie.map((movie)=>
//     // <img src={movie.posterUrl}>{}</img>
//     //<img src={movie.posterUrl} alt="Movie Poster" style="width:100%">{}</img>
  
//     <div className="favCard" key={movie.posterUrl}>
//   <img src={movie.posterUrl}>{}</img>
//   <h2>{movie.title}</h2>
//   <p className="price">$19.99</p>
//   <p>Some text about the jeans..</p>
//   <p><button>Remove From Favorite</button></p>
// </div>
//     )
    
    return (<div>
        {favMovie}

    </div>)
}
export default Favorite;