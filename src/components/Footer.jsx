import React from 'react';
import './styles/Footer.scss';
import LogoK from '../images/LogoKarens/LogoK.png';
import LogoFace from '../images/LogoRedes/LogoFace.png';
import LogoInsta from '../images/LogoRedes/LogoInsta.png';

const Footer = () => {
    return (
        <footer>
            <div className="row">   
                {/* Column 1  */}
                <div className="logo">
                    <img src={LogoK}/>
                </div>
                {/* Column 2 */}
                <div className="menu">
                    <h4>NAVEGACIÓN</h4>
                    <br />
                    <ul>
                        <li>Inicio</li>
                        <li>Somos Natural</li>
                        <li>¿Dónde estamos?</li>
                        <li>Contacto</li>
                    </ul>
                    
                </div>
                {/* Column 3 */}
                <div className="follow">
                <h4>SÍGUENOS EN</h4>
                    <ul>
                        <li><img src={LogoFace}/><img src={LogoInsta}/></li>
                        <br />
                        <li>Ⓒ Copyright 2021<br></br> Todos los derechos reservados</li>
                    </ul>
                </div>

            </div> 

        </footer>
    )
}

export default Footer
