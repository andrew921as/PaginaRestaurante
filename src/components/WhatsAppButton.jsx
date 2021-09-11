import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './styles/WhatsAppButton.scss';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.link/axv209" target="_blank" rel="noreferrer" className="wppButton">
            <FaWhatsapp />
        </a>
    )
}

export default WhatsAppButton
