import React from 'react';
import Gallery from '../components/Gallery';
import WeAreNatural from '../components/WeAreNatural';

//Style
import './styles/AboutUs.scss';

const AboutUs = () => {
    return (
        <main className="AboutUs">
            <section className="WeAreNatural__section">
            <h1>Somos natural</h1>
                <WeAreNatural />
                <div class="container">
                <p><i>“Karen´s pizza es la pizza a tu gusto”<br /><br />
                    Somos una cadena de restaurantes de comida italiana que fusiona diferentes ingredientes de la gastronomía, para ofrecer platos deliciosos y novedosos que reflejen el talento humano y potencial de trabajo en cada uno de nuestros puntos de venta.<br /><br />
                    Nuestra prioridad es brindar la mejor calidad y servicio a nuestros clientes, un espacio ideal para el encuentro y la cercanía.<br /><br />
                    Ofrecemos una amplia gama de platos y servicios, diseñados exclusivamente para hacer de la comida italiana de alta calidad, una experiencia que logra combinar la creatividad y el buen gusto.</i></p>
            </div>
            </section>
            <section className="gallery__section">
                <Gallery />
            </section>
        </main>
    )
}

export default AboutUs
