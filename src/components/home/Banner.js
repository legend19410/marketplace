import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './styles/Banner.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';
// import ''

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
function Banner() {
  return (
    <section className="home" id="home">

            <div className="swiper home-slider">
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: true }}
                    //    scrollbar={{ draggable: true }}
                       spaceBetween={0}
                    //    centeredSlides={true}
                       loop={true}
                       slidesPerView={1}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       autoplay={{delay:10000}}
                       navigation
                >
                            <SwiperSlide>
                                <div className="swiper-slide slide" style={{background: "url(image/banner-bg5.jpg)"}}>
                                    <div className="content">
                                        <span>place your order for the most</span>
                                        <h3>delicious fruits</h3>
                                        <NavLink to='/categories' className="btn shopBtn">shop now</NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide slide" style={{background: "url(image/banner-bg8.jpg)"}}>
                                    <div className="content">
                                        <span>dont be late for the</span>
                                        <h3>amazing offers</h3>
                                        <NavLink to='/categories' className="btn shopBtn">shop now</NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide slide" style={{background: "url(image/banner-bg9.jpg)"}}>
                                    <div className="content">
                                        <span>we only offer</span>
                                        <h3>Best Products</h3>
                                        <NavLink to='/categories' className="btn shopBtn">shop now</NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                </Swiper>
        
            </div>

</section>
  )
}

export default Banner