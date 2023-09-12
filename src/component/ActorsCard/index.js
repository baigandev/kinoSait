import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import user from '../../img/user.jfif'
import {Link} from "react-router-dom";
const ActorsCard = ({id}) => {
    const [actors,setActors] = useState([])
    function getActors(key) {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res) => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)
    return (
        <>
         <div id="actors">
             <div className="container">
                 <div className="actors">
                     {
                         actors.map((el) => (
                             <div className="actors--card">
                                 {
                                     el.profile_path ?  <Link to={`/actor/details/${el.id}`}>
                                             <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                  className="actors--card__img" alt=""/>
                                         </Link>

                                  :   <img src={user} width={180} alt=""/>
                                 }
                                 <h2>{el.name}</h2>
                             </div>
                         ))
                     }
                 </div>
             </div>
         </div>
        </>
    );
};

export default ActorsCard;


