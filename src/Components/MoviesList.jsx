import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoviesList = ( {movies,title} ) => {
    
    let [favId,setFavId]=useState(null);
    let [altered,setAltered]=useState(0);

    useEffect(()=>{
        let fav= JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}))
     },[altered])

    let addtofav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav=JSON.stringify(fav);
        localStorage.setItem("fav",fav);
        setAltered(altered+1);
        // alert(movie.moviename+" added to the favourite list")
      }
      
    let removeFav=(movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{return m.id!=movie.id})
        fav=JSON.stringify(fav);
        localStorage.setItem("fav",fav);
        setAltered(altered+1);
        // alert(movie.moviename+" removed from favourite list")
        }
    

    return (
        <div className="movieslist">
            {movies!=null && <><h1 id="movie-type">{title}</h1><br/></>}
        {
            movies && <div id="movies">
                {
                    movies.map((movie,i)=>{
                        return(
                            <div key={i} id="movie">
                                
                                    {  favId && favId.includes(movie.id) ?
                                        <button id="remove"  onClick={()=>{removeFav(movie)}}><i className='bx bxs-heart' ></i></button> :
                                        <button id="fav"  onClick={()=>{addtofav(movie)}}><i className='bx bx-heart'></i></button>
                                    }

                                <Link to={`/moviedetails/${movie.id}`} style={{textDecoration:"none"}}>                               
                                    <img src={movie.poster} alt="NA" height="350px" width="250px" />
                                    <h1 id="movie-title">{movie.moviename}</h1>
                                    <h3 id="movie-details">Genre : {movie.genre}</h3>
                                    <h3 id="movie-details">Rating : {movie.rating}</h3>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
      );
}
 
export default MoviesList;