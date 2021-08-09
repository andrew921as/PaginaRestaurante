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
                    <img src={LogoK} alt="Logo karen's pizza"/>
                </div>
                {/* Column 2 */}
                <div className="texto">
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
                            <li><img src={LogoFace} alt="Logo facebook"/><img src={LogoInsta} alt="Logo insta"/></li>
                            <br />
                            <li>Ⓒ Copyright { new Date().getFullYear() }<br></br> Todos los derechos reservados</li>
                        </ul>
                    </div>
                </div>

            </div> 

        </footer>
    )
}

export default Footer
