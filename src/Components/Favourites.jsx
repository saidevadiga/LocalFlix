import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Favourites = () => {

    let [favMovies, setFavMovies]=useState(null);

    useEffect(()=>{
        setFavMovies(JSON.parse(localStorage.getItem("fav")));
    })

    return (<div>
       { favMovies &&
                      <MoviesList movies={favMovies} title={"Favourite Movies"} />
                      }
    </div>  );
}
 
export default Favourites;