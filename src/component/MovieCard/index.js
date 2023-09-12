import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <>
            <div className="popular--card">
                <Link to={`/movie/details/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} className="popular--card__img" alt="img"/>
                </Link>
                <h3>{el.original_title}</h3>
                <p>{el.release_date}</p>
            </div>
        </>
    );
};

export default MovieCard;