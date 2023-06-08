import { useRef, useState } from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    let [menu,setMenu] = useState(false);

    let [key,setKey] = useState("");
    let searchText=useRef();
    return (
        <nav id="nav-bar">
            <div id="logo">
                <Link to="/" id="logoText">LocalFlix</Link>
            </div>
            <div id="search-bar">
                <input type="text" ref={searchText} value={key} onChange={(e)=>{setKey(e.target.value)}} placeholder="Search for Movies" />
                <button><Link to={`/search/${key}`} >Search</Link></button>
            </div>
            <div id="add-movie">
                <Link id="favourites" to="/favourites"><i className='bx bxs-heart' ></i></Link>
                <Link id="addmovie" to="/addmovie">Add Movie</Link>
            </div>
            <div id='hamberger'>
                <span onClick={()=>{setMenu(!menu)}}>
                    { menu==false ? <i class='bx bx-menu'></i> :
                                    <i class='bx bx-menu-alt-right' ></i>}
                </span>
                {menu && <div id="menulist">
                            <div><Link id="addmovie" to="/favourites">Favourite Movies</Link></div>
                            <div><Link id="addmovie" to="/addmovie">Add Movie</Link></div>
                         </div> }
            </div>
        </nav>
      );
}
 
export default NavBar;