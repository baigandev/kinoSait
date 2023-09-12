import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API";
import ActorsCard from "../../component/ActorsCard";
import Trailer from "../../component/Trailer";
import {LanguageContext} from "../../context";


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    function getMovieDetails(key){
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then((res) => setMovieDetails(res.data))
    }
    useEffect(() => {
        getMovieDetails(API_KEY)
    }, [language])
    console.log(movieDetails)
    const {backdrop_path,title,release_date,overview,runtime,genres,tagline} = movieDetails
    return (
        <>
         <div id="movieDetails" style={{
             background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat/cover`,
         }}>
             <div className="container">
                 <div className="movieDetails">
                     <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`} className="movieDetails--img" alt="img"/>
                  <div className="movieDetails--block" >
                      <h2 className="movieDetails--block__h2"><pre>MOVIE TITLE:</pre> {title}</h2>
                      <div style={{
                          display: "flex",
                          alignItems: "center",
                      }}>
                          <pre className="movieDetails--block__text">Data: {release_date}</pre>
                          <span style={{
                              margin: "0 20px"
                          }}>Time: {Math.floor(runtime / 60)}h {runtime % 60}min</span>
                          <select style={{
                              padding: "8px 10px",
                              borderRadius: "8px",
                              color: "red",
                              fontWeight:"700",
                              outline: "none"
                          }}>
                          {
                              genres?.map((el) => (
                                  <option style={{
                                      color: "red",
                                      fontWeight:"700",
                                  }}>{el.name}</option>
                              ))
                          }
                          </select>

                      </div>
                      <p style={{
                          fontWeight:"600",
                          fontStyle:"italic",
                          fontSize: "24px",
                          padding:"10px 0"
                      }}>"{tagline}"</p>
                      <p className="movieDetails__p">{overview}</p>
                  </div>
                 </div>
             </div>
         </div>
            <ActorsCard id={movieId}/>
            <Trailer id={movieId}/>
        </>
    );
};

export default MovieDetails;


