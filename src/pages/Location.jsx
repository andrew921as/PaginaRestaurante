import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Map from '../components/Map';

const Location = () => {
    return (
        <main>
            <Header />
            <section className="map__section">
                <Map />
            </section>
            <Footer />
        </main>
    )
}

export default Location