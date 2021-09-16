import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/Logo/LOGO.svg';
import { IoMenu, IoClose } from 'react-icons/io5';

//Style
import './styles/Header.scss';

const Header = () => {

    const location = useLocation(); // Url
    const headerRef = useRef(null);
    
    const [activeWindow, setActiveWindow] = useState(location.pathname); // Url pathname
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        if(window.scrollY >= (windowHeight * 0.23)){
            headerRef.current.classList.add("active");
        } else {
            headerRef.current.classList.remove("active");
        }
    }

        useEffect(() => {
            setActiveWindow(location.pathname);

        }, [location]);

    useEffect(() => {
        if(activeWindow !== "/formulario"){
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [activeWindow]);

    if(activeWindow === "/formulario"){
        return null;
    }

    return (
        <header ref={headerRef}>
            <nav className={activeWindow !== "/" ? "shadow" : ""}>
                <ul className={ isMenuOpen && "active" }>
                    <li> <Link className={ activeWindow === "/" ? "active" : "null"} to="/" onClick={isMenuOpen && toggleMenu}>INICIO</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/somos-natural" ? "active" : "null"} to="/somos-natural" onClick={isMenuOpen && toggleMenu}>SOMOS NATURAL</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/ubicacion" ? "active" : "null"} to="/ubicacion" onClick={isMenuOpen && toggleMenu}>¿DÓNDE ESTAMOS?</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/contacto" ? "active" : "null"} to="/contacto" onClick={isMenuOpen && toggleMenu}>HAZ TU PEDIDO</Link></li>
                </ul>
                <div className="mobile__nav menu__active">
                    <img src={Logo} alt="Karen's pizza logo" />
                    { isMenuOpen ? <IoClose onClick={toggleMenu}/> : <IoMenu onClick={toggleMenu} /> }
                </div>
            </nav>

        </header>
    )
}

export default Header
