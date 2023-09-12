import React, {useContext, useState} from 'react';
import logo from '../../img/logo.png'
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
const Header = () => {
    const [search,setSearch] = useState('')
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)

    return (
        <>
         <div id="header">
             <div className="container">
                 <div className="header">
                     <img src={logo} width={140} alt=""/>
                     <div className="header--nav">
                         <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                         <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                         <NavLink to={"/topRated"} className="header--nav__link">Top Rated</NavLink>
                     </div>
                     <select className="header--language" onChange={(e) => setLanguage(e.target.value)}>
                         <option value="ru-RU">Руский</option>
                         <option value="en-US">English</option>
                         <option value="fr-FR">France</option>
                     </select>
                     <div className="header--right">
                         <input onChange={(e) => {
                             setSearch(e.target.value)
                         }} type="search" className="header--right__search" placeholder="Search"/>
                         <button onClick={() => {
                             nav(`/search/search_movie/${search}`)
                         }} className="header--right__btn">Search</button>
                     </div>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Header;