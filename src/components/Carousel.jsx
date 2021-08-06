import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade} from 'swiper';

//Images
import Img1 from '../images/PortadaSlide/1PORTADA.jpg';

// Styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-fade/effect-fade.min.css"
import './styles/Carousel.scss';

// Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);




const Carousel = () => {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
                return '<span class="' + className + '"></span>';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Swiper
            // style={{transform: `translateY(${offsetY * 0.2}px)`}}
            className="carousel__container"
            effect={'fade'}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
            noSwiping={true}
            noSwipingClass={'swiper-slide'}
            pagination={pagination}
            loop={true}
            autoplay={{
                "delay": 5000,
                "disableOnInteraction": false
            }}
        >
            <SwiperSlide  >
                <img
                    style={{transform: `translateY(${offsetY * 0.2}px)`}}
                    className="carousel__slide"
                    src={Img1} 
                    alt="Img1" 
                />
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-500">
                <img 
                    style={{transform: `translateY(${offsetY * 0.2}px)`}}
                    className="carousel__slide"
                    src="https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Img1" 
                />
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="100">
                <img 
                    style={{transform: `translateY(${offsetY * 0.2}px)`}}
                    className="carousel__slide"
                    src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Img1" 
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel
