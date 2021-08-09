import React from 'react';
//Images
import Img1 from '../images/Gallery/Galeria1.jpg';
import Img2 from '../images/Gallery/Galeria2.jpg';
import Img3 from '../images/Gallery/Galeria3.jpg';
import Img4 from '../images/Gallery/Galeria4.jpg';
import Img5 from '../images/Gallery/Galeria5.jpg';
import Img6 from '../images/Gallery/Galeria6.jpg';


//Style
import './styles/Gallery.scss';


const Gallery = () => {
    return (
        <article className="gallery__container">
            <div className="gallery__item wide">
                <img style={{objectPosition: "left"}} src={Img1} alt="Nuestro queso"/>
                <div className="details">
                    <h2>Somos Natural</h2>
                    <p>Nuestro queso es elaborado a base de leche de pastoreo, 100% natural.</p>
                </div>
            </div>
            <div className="gallery__item tall">
                <img src={Img4} alt="Nuestro queso"/>
                <div className="details">
                    <h2>Nuestras Frutas</h2>
                    <p>Todos nuestros postres y sus salsas son hechos en casa.
                        100% sabor natural
                    </p>
                </div>
            </div>
            <div className="gallery__item">
                <img src={Img5} alt="Nuestro queso"/>
                <div className="details">
                    <h2>Nuestras Pastas</h2>
                    <p>Todos nuestros postres y sus salsas son hechos en casa.
                        100% sabor natural
                    </p>
                </div>
            </div>
            <div className="gallery__item">
                <img src={Img2} alt="Nuestro queso"/>
                <div className="details">
                    
                </div>
            </div>
            <div className="gallery__item">
                <img src={Img3} alt="Nuestro queso"/>
                <div className="details">
                    
                </div>
            </div>
            <div className="gallery__item">
                <img src={Img6} alt="Nuestro queso"/>
                <div className="details">
                    <h2>Nuestras Pastas</h2>
                    <p>Todos nuestros platos son preparados con la mejor pasta.
                        100% Natural
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Gallery
