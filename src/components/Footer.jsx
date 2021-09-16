import React, {useState, useEffect}from 'react';
import './styles/Footer.scss';
import LogoK from '../images/LogoKarens/LogoK.png';
import LogoFace from '../images/LogoRedes/LogoFace.png';
import LogoInsta from '../images/LogoRedes/LogoInsta.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation(); // Url
    const [activeWindow, setActiveWindow] = useState(location.pathname); // Url pathname
    useEffect(() => {
        setActiveWindow(location.pathname);

    }, [location]);

    if(activeWindow === "/formulario"){
        return null;
    }

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
                        <li><Link className={ activeWindow === "/" ? "active" : "null"} to="/">INICIO</Link></li>
                        <li><Link className={ activeWindow === "/somos-natural" ? "active" : "null"} to="/somos-natural">SOMOS NATURAL</Link></li>
                        <li><Link className={ activeWindow === "/ubicacion" ? "active" : "null"} to="/ubicacion">¿DÓNDE ESTAMOS?</Link></li>
                        <li><Link className={ activeWindow === "/contacto" ? "active" : "null"} to="/contacto">HAZ TU PEDIDO</Link></li>
                        </ul>
                    
                    </div>
                    {/* Column 3 */}
                    <div className="follow">
                        <h4>SÍGUENOS EN</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/KarensPizzaOficial" target="_blank" rel="noreferrer"><img src={LogoFace} alt="Logo facebook"/></a><a href="https://www.instagram.com/karenspizzaoficial/" target="_blank" rel="noreferrer"><img src={LogoInsta} alt="Logo insta"/></a></li>
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
