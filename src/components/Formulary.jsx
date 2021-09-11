import React from 'react';
import './styles/Formulary.scss';

const Formulary = () => {
    return(
        <div className="GoogleForm">
            <iframe className="formularioG" src="https://docs.google.com/forms/d/e/1FAIpQLSf_6ln1dMeGwEJ1A2YPcw1MCZULJ41ByiOcOMww6uXtftFIoQ/viewform?embedded=true" width="80%" height="1000em" frameborder="0" marginheight="0" marginwidth="0" border-radius="1%">Cargando…</iframe>
        </div>
    )
}

export default Formulary