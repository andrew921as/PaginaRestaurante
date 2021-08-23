import React from 'react'
import Map from '../components/Map';
import './styles/Location.scss';

const Location = () => {
    return (
        <main>
            <section className="map__section">
                <h3>¿Dónde estamos?</h3>
                <Map />
            </section>
        </main>
    )
}

export default Location
