import React from 'react';
import './styles/Menu.scss';
//Images
import Menu1Esp from '../images/Menu/Portada1Esp.jpg';
import Menu2Esp from '../images/Menu/Portada2Esp.jpg';
import Menu1Eng from '../images/Menu/Portada1English.jpg';
import Menu2Eng from '../images/Menu/Portada2English.jpg';
import menuEsp from '../images/Menu/menuEsp.pdf';
import menuEng from '../images/Menu/menuEng.pdf';


const Menu = () => {
    

    return(
        <div className="containerM">
            <h3>Menú</h3>
            <div className="imagenes">
                <a href={menuEsp} target="_blank" rel="noreferrer">
                    <img style={{objectPosition: "center"}} src={Menu2Esp} alt="Menu1"/>
                    <img className="segundaI" style={{objectPosition: "center"}} src={Menu1Esp} alt="Menu1 seleccionado"/>
                </a>

                <a href={menuEng} target="_blank" rel="noreferrer">
                    <img style={{objectPosition: "center"}} src={Menu2Eng} alt="Menu1"/>
                    <img className="segundaI" style={{objectPosition: "center"}} src={Menu1Eng} alt="Menu1 seleccionado"/>
                </a>
            </div>

        
        
        </div>
    )
}

export default Menu