import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {

    const location = useLocation(); // Url
    const headerRef = useRef(null);
    
    const [activeWindow, setActiveWindow] = useState(location.pathname); // Url pathname

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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className="" ref={headerRef}>
            <nav>
                <ul>
                    <li> <Link className={ activeWindow === "/" ? "active" : "null"} to="/">INICIO</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/somos-natural" ? "active" : "null"} to="/somos-natural">SOMOS NATURAL</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/ubicacion" ? "active" : "null"} to="/ubicacion">¿DÓNDE ESTAMOS?</Link> <span>‧</span></li>
                    <li><Link className={ activeWindow === "/contacto" ? "active" : "null"} to="/contacto">CONTACTO</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
