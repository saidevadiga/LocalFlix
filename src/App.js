import AddMovie from "./Components/AddMovie";
import Favourites from "./Components/Favourites";
import HomePage from "./Components/HomePage";
import MovieDetails from "./Components/MovieDetails";
import NavBar from "./Components/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
          <Route path="/moviedetails/:id" element={<MovieDetails/>} />
          <Route path="/favourites" element={<Favourites/> } />
          <Route path="/search/:searchKey" element={ <Search/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
