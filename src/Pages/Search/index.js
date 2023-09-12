import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import MovieCard from "../../component/MovieCard";

const Search = () => {
    const [search, setSearch] = useState([])
    function getSearch(key) {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => setSearch(res.data.results))
    }
    useEffect(() => {
        getSearch(API_KEY)
    },[search])
    const {movieName} = useParams()
    return (
        <>
         <div id="popular">
             <div className="container">
                 <div className="popular">
                     {
                            search.map((el) => (
                                <div>
                                    <MovieCard el={el}/>

                                </div>
                            ))
                     }
                 </div>
             </div>
         </div>
        </>
    );
};

export default Search;