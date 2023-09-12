import React from 'react';
import tv from '../../img/tv.jfif'
const Block = () => {
    return (
        <>
         <div id="block">
             <div className="container">
                 <div className="block">
                     <div className="block--left">
                         <h1 className="block--left__h1">Смотрите на телевизоре.</h1>
                         <p className="block--left__text">Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.</p>
                     </div>
                     <img src={tv} style={{
                         borderRadius: "10px"
                     }} width={"500px"} alt="img"/>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Block;