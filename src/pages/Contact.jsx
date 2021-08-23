import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import { caliImages, palmiraImages, bogotaImages } from '../components/GroupImages';
import './styles/Contact.scss';

const Contact = () => {
    return (
        <main>
            <section className="contact__section">
                <h3>Haz tu pedido</h3>
                <h4>Elige una ciudad</h4>
                <ButtonGroup title="CALI" sedes={caliImages} />
                <ButtonGroup title="BOGOTÁ" sedes={bogotaImages} />
                <ButtonGroup title="PALMIRA" sedes={palmiraImages} />

            </section>
        </main>
    )
}

export default Contact
