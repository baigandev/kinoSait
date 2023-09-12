import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API";

const ActorsDetails = () => {
    const [actorDetails, setActorDetails] = useState({})
    const {personId} = useParams()
    function getActorDetails(key) {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then((res) => setActorDetails(res.data))
    }
    useEffect(() => {
        getActorDetails(API_KEY)
    }, [])
    console.log(actorDetails)
    const {profile_path,name,birthday,biography} = actorDetails
    return (
        <>
         <div id="actorDetails">
             <div className="container">
                 <div className="actorDetails">
                     <img style={{
                         borderRadius: "10px"
                     }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="img"/>
                     <div className="actorDetails--right">
                         <h1 className="actorDetails--right__h1">{name}</h1>
                         <pre style={{
                             margin: "12px 0"
                         }}>{birthday}</pre>
                         <p className="actorDetails--right__text">{biography}</p>
                     </div>
                 </div>
             </div>
         </div>
        </>
    );
};

export default ActorsDetails;
//'