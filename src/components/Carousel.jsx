import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade} from 'swiper';

//Images
import Img1 from '../images/PortadaSlide/1PORTADA.jpg';
import Img2 from '../images/PortadaSlide/2PORTADA.jpg';
import Img3 from '../images/PortadaSlide/3PORTADA.jpg';
import Img4 from '../images/PortadaSlide/4PORTADA.jpg';


// Styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-fade/effect-fade.min.css"
import './styles/Carousel.scss';

// Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Carousel = () => {

    const images = [
        Img1,
        Img2,
        Img3,
        Img4,
    ];

    const carouselRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset)

        let windowHeight = window.innerHeight;
        if(window.pageYOffset >= (windowHeight * 0.6)){
            carouselRef.current.classList.add("fade");
        } else {
            carouselRef.current.classList.remove("fade");
        }
    };

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
            ref={carouselRef}
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
            { images.map((image) => {
                return <SwiperSlide>
                            <img 
                                style={{transform: `translateY(${offsetY * 0.2}px)`}}
                                className="carousel__slide"
                                src={image}
                                alt="Portada karen's" 
                            />
                        </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Carousel
