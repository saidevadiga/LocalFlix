import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

    //to navigate
    
    let navigate=useNavigate()  


    let moviename=useRef();
    let artistname=useRef();
    let director=useRef();
    let genre=useRef();
    let rating=useRef();
    let release=useRef();
    let poster=useRef();
    let trailer=useRef();
    let synopsis=useRef();

    let handleMovie=(e)=>{
        e.preventDefault();

        let artists=artistname.current.value.split(",");
        

        let newMovie={
            moviename:moviename.current.value,
            cast:artists,
            director:director.current.value,
            languages:[],
            genre:genre.current.value,
            poster:poster.current.value,
            trailer:trailer.current.value,
            releasedate:release.current.value,
            rating:rating.current.value,
            synopsis:synopsis.current.value
        }
        
        let option=document.getElementsByName("lang");
        for(let i=0;i<option.length;i++)
        {
            if(option[i].checked==true)
            {
                newMovie.languages.push(option[i].value)
            }
        }

        fetch("http://localhost:4000/movies",
                                       {
                                        method:"POST",
                                        headers:{"Content-Type":"application/json"},
                                        body:JSON.stringify(newMovie)
                                       }  )
        
        .then(()=>{ alert("New Movie Added Succesfully") 
        navigate("/");}) 
                                     
    }
     
    return ( 
    <div id="newmovie">

        <form id="form" onSubmit={handleMovie}>
            <h1>Add a New Movie Details</h1>
            <input id="addmovieinput" type="text" placeholder="Enter a Movie name" required ref={moviename}/>
            <input id="addmovieinput" type="text" placeholder="Enter the Artists name" required ref={artistname}/>
            <input id="addmovieinput" type="text" placeholder="Enter the Director name" required ref={director}/>
            <input id="addmovieinput" type="text" placeholder="Enter the Genre of the movie" required ref={genre}/>
            <fieldset id="language" required>
                <legend>Select languages</legend>
                <div><input type="checkbox" name="lang" value="English" /><label htmlFor="English">English</label></div>
                <div><input type="checkbox" name="lang" value="Hindi" /><label htmlFor="Hindi">Hindi</label></div>
                <div><input type="checkbox" name="lang" value="Kannada" /><label htmlFor="Kannada">Kannada</label></div>
                <div><input type="checkbox" name="lang" value="Malayalam" /><label htmlFor="Malayalam">Malayalam</label></div>
                <div><input type="checkbox" name="lang" value="Tamil" /><label htmlFor="Tamil">Tamil</label></div>
                <div><input type="checkbox" name="lang" value="Telugu" /><label htmlFor="Telugu">Telugu</label></div>
            </fieldset>
            <input id="addmovieinput" type="number" min={1} max={10} step={0.1} placeholder="Give a Rating" required ref={rating}/>
            <label id="releasedate"> <h1>Select Release Date</h1>
                <input id="addmovieinput" type="date" placeholder="Enter release date" required ref={release}/>
            </label>
            <input id="addmovieinput" type="url" placeholder="Paste Movie Poster link " required ref={poster}/>
            <input id="addmovieinput" type="url" placeholder="Paste Movie Trailer link" required ref={trailer}/>
            <textarea id="addmovieinput" placeholder="Write Movie Description" cols="30" rows="10" ref={synopsis} required ></textarea>
            <input id="submit" type="submit" value="Submit" />
        </form>

    </div> );
}
 
export default AddMovie ;