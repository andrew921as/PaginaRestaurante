import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './styles/WhatsAppButton.scss';
import whatB from '../images/Servicio/AtencionCliente.png';

const WhatsAppButton = () => {

    const { pathname } = useLocation();

    if(pathname === "/formulario"){
        return null;
    }

    return (
        <a href="https://wa.link/07weyg" target="_blank" rel="noreferrer" className="wppButton">
            <img src={whatB} alt="LogoWhat"/>
        </a>
    )
}

export default WhatsAppButton
