import './App.scss';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorsDetails from "./component/ActorsDetails";
import Search from "./Pages/Search";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/topRated"} element={<TopRated/>}/>
                <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
                <Route path={"/actor/details/:personId"} element={<ActorsDetails/>}/>
                <Route path={"/search/search_movie/:movieName"} element={<Search/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
