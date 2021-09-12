import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './styles/WhatsAppButton.scss';

const WhatsAppButton = () => {

    const { pathname } = useLocation();

    if(pathname === "/formulario"){
        return null;
    }

    return (
        <a href="https://wa.link/axv209" target="_blank" rel="noreferrer" className="wppButton">
            <FaWhatsapp />
        </a>
    )
}

export default WhatsAppButton
