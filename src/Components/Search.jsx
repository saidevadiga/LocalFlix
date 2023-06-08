import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import MoviesList from "./MoviesList";

const Search = () => {

    let {searchKey} = useParams();
    
    let [movies,setMovies]=useState(null);
    let [err,setErr]=useState(null);
    let [pending, setPending]=useState(true);

    useEffect(()=>{

        setMovies(null);
        setPending(true);

        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                let d=data.filter((m)=>{
                    return ( m.moviename.toLowerCase().includes(searchKey.toLowerCase())||
                             m.genre.toLowerCase().includes(searchKey.toLowerCase())||
                             m.languages.includes(searchKey)||
                             m.cast.includes(searchKey)) ||
                             m.director.toLowerCase().includes(searchKey.toLowerCase())
                })
                setMovies(d)
                setPending(false)
            })
            .catch((err)=>{setErr("Network Issue..! Try Again Later")
                            setPending(false)})}
    ,1000)},[searchKey])

    return ( 
        <div>
            {pending && <h1 id="loader">Loading....!</h1>}
            {movies && <MoviesList movies={movies} title={"Search Result"}></MoviesList>}
        </div>
     );
}
 
export default Search;