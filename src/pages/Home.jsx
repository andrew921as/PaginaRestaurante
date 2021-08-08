import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import './styles/Home.scss';

const Home = () => {
    return (
        <main>
            <Header />
            <section className="carousel__section">
                <Carousel />
            </section>
            <section className="test">
                <Gallery />
            </section>
        </main>
    )
}

export default Home
