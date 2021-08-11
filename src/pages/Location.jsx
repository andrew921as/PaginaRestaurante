import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Map from '../components/Map';
import './styles/Location.scss';

const Location = () => {
    return (
        <main>
            <Header />
            <section className="map__section">
                <h3>¿Dónde estamos?</h3>
                <Map />
            </section>
            <Footer />
        </main>
    )
}

export default Location