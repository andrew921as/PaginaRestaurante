import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import './styles/Home.scss';

const Home = () => {
    return (
        <main>
            <Header />
            <section className="carousel__section">
                <Carousel />
            </section>
            <section className="test">

            </section>
        </main>
    )
}

export default Home
