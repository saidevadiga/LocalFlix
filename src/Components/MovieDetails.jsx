import {Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RelatedMovies from "./RelatedMovies";


const MovieDetails= () => {
    
    let {id} =useParams();
    let navigate=useNavigate();  
    let [movie,setMovie]=useState(null);
    let [err,setErr]=useState(null);
    let [pending, setPending]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{setMovie(data)
                            setPending(false) })
            .catch((err)=>{setErr("Network Issue..! Try Again Later")
                            setPending(false)})}
    ,1000)},[id])

    let deleteMovie=()=>{
        prompt("Are You Sure...!")
        fetch("http://localhost:4000/movies/"+id, {method:"DELETE"}) 
        .then(()=>{ navigate("/")})
    }

    return ( 
        <div>
            { pending && <h1 id="loader">Loading.....</h1>}

            { err && <h1 id="loader">{err}</h1>}
            {movie && <div id="alldetails">
                <div id="posterdetails">
                    <div id="poster"><img src={movie.poster} alt="NA" style={{height:"320px",width:"230px"}} /></div>
                    <div id="details">
                        <br />
                        <h1 id="moviename">{movie.moviename}</h1><br />
                        <div id="detail">Starring : <h3>{ movie.cast.join(" , ")}</h3></div>
                        <div id="detail">Directed By : <h3>{movie.director}</h3></div>
                        <div id="detail">Release Date : <h3>{movie.releasedate}</h3></div>
                        <div id="detail">Language : <h3>{ movie.languages.join(" , ")}</h3></div>
                        <div id="detail">Genre : <h3>{movie.genre}</h3></div>
                        <div id="detail">Rating : <h3>{movie.rating}</h3></div>
                        <br />
                        <div id="synopsis">Plot : <h3 >{movie.synopsis}</h3></div>
                    </div>
                </div>
                <div id="trailer">
                    <iframe width="600" height="315" src={movie.trailer}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div id="updelete">
                    <Link to={`/update/${id}`}><button id="updatebutton" >Update movie</button></Link>
                    <button id="deletebutton" onClick={deleteMovie}>Delete movie</button>
                </div>

            </div> 
            }
            {movie &&
            <RelatedMovies genre={movie.genre} />
            }
        </div>
     );
}
 
export default MovieDetails
;