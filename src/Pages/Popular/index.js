import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../component/MovieCard";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = (key) => {
       axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
           .then((res) => {
               setPopular(res.data.results)
           })
    }
    useEffect(() => {
       getPopular(API_KEY)
    },[active,language])
    console.log(popular)
    return (
        <>
         <div id="popular">
             <div className="container">
                 <div className="popular">
                     {
                         popular.map((el) => (
                             <MovieCard el={el}/>
                         ))
                     }

                 </div>

                 <div style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     margin: "50px 0"
                 }} className="div">
                     <button  style={{
                         padding:"10px 35px",
                         borderRadius:"10px",
                         color:"white",
                         border:"2px solid red",
                         backgroundColor:"#0dcdef",
                         fontSize:"20px",
                         fontWeight:"600"
                     }}
                              onClick={() =>
                         setActive(active === 1 ? 1 : active -1)
                     }>Назад</button>
                     <h1 style={{
                         margin:"0 30px",
                         color:"white"
                     }}>{active}</h1>
                     <button style={{
                         padding:"10px 35px",
                         borderRadius:"10px",
                         color:"white",
                         border:"2px solid red",
                         backgroundColor:"#0dcdef",
                         fontSize:"20px",
                         fontWeight:"600"
                     }}
                             onClick={() =>
                         setActive(active + 1)
                     }>Вперед</button>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Popular;
