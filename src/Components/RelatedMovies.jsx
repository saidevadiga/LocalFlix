import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

const RelatedMovies = ({genre}) => {

    window.scrollTo(0,0);

    let [movies,setMovies]=useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{ return res.json()})
        .then((data)=>{setMovies(data)})
    } , [])

    return (<div>
        {movies && <MoviesList movies={movies.filter((m)=>{return genre.split(" ").some((g)=>{return m.genre.includes(g)})})} title="Related Movies" />}
    </div> );
}
 
export default RelatedMovies;