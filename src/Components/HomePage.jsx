import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";


const HomePage = () => {

    let [movies,setMovies]=useState(null);
    let [err,setErr]=useState(null);
    let [pending, setPending]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{setMovies(data)
                            setPending(false) })
            .catch((err)=>{setErr("Network Issue..! Try Again Later")
                            setPending(false)})}
    ,1000)},[])


    useEffect(()=>{
        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav","[]")
        }
    },[])

    return ( 
    <div className="home">

        { pending && <h1 id="loader">Loading.....</h1>}

        { err && <h1 id="loader">{err}</h1>}

        { movies!=null && 
            <>
            <MoviesList movies={movies} title="All Movies" />

            <MoviesList movies={movies.filter((m)=>{return m.rating>=8.5})} title="Top Rated Movies" />
    
            <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Action")})} title="Action Movies" />

            <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Romantic")})} title="Romantic Movies" />

            <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Thriller","Suspense")})} title="Suspense Thriller Movies" />

            <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Comedy")})} title="Comedy Movies" />

            <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Adventure")})} title="Adventures Movies" />

            </>
        }

    </div>
     );
}
 
export default HomePage;