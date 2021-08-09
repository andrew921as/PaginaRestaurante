import React from 'react';
import Footer from '../components/Footer';
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
            <section className="gallery__section">
                <Gallery />
            </section>

            <Footer />
        </main>
    )
}

export default Home
