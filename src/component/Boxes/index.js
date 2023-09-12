import React from 'react';
import phone from '../../img/phone.jfif'
const Boxes = () => {
    return (
        <>
         <div id="boxes">
             <div className="container">
                 <div className="boxes">
                     <img src={phone} alt="img"/>
                     <div className="boxes--right">
                         <h1 className="boxes--right__h1">Загружайте сериалы для просмотра офлайн.</h1>
                         <p className="boxes--right__text">Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.</p>
                     </div>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Boxes;