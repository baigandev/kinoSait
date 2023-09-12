import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";


const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [active,setActive] = useState(1)
    function getTopRated(key){
        axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${active} `)
            .then((res) => {
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API_KEY)
    }, [active])
    console.log(topRated)
    return (
        <>
         <div id="topRated">
             <div className="container">
                 <div className="topRated">
                     {
                         topRated.map((el) => (
                             <div className="topRated--card">
                                 <Link to={`/movie/details/${el.id}`}>
                                     <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} className="topRated--card__img" alt="img"/>
                                 </Link>
                                 <h3>{el.name}</h3>
                                 <p>{el.first_air_date}</p>
                             </div>
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

export default TopRated;

     //
