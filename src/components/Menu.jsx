import React from 'react';
import './styles/Menu.scss';
//Images
import Menu1 from '../images/Menu/PortadaM1.jpg';
import Menu2 from '../images/Menu/PortadaM2.jpg';
import archivo from '../images/Menu/menu-karens.pdf';


const Menu = () => {
    

    return(
        <div className="containerM">
            <h3>Menú</h3>
            <div className="imagenes">
                <a href={archivo} target="_blank">
            
             <img style={{objectPosition: "center"}} src={Menu2}/>
             <img className="segundaI" style={{objectPosition: "center"}} src={Menu1}/>
             </a>
            </div>
        
        
        </div>
    )
}

export default Menu