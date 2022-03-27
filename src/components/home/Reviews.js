import React, {useState, useEffect} from 'react'

import styles from './styles/Reviews.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css/pagination';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

SwiperCore.use([Pagination, Autoplay])
function Reviews() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const getNumberOfSlides = ()=>{

        if(windowDimensions.width > 973) return 3
        if(windowDimensions.width > 696) return 2
        else return 1
    }

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        console.log(windowDimensions)
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);


  return (
        
<section className={styles.review} id="review">

<h1 className="heading"> Customer's Review</h1>

<div className="swiper-container review-slider">
            <Swiper
                        modules={[Pagination,  A11y]}
                        pagination={{ clickable: true }}
                       spaceBetween={5}
            
                       loop={true}
                       slidesPerView={getNumberOfSlides()}
                    //    centeredSlides={true}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       autoplay={{delay:10000}}
                >
                            <SwiperSlide>
                                <div className={`${styles.slide} swiper-slide`}>
                                    <i className={`${styles.quotes} fas fa-quote-right`}></i>
                                    <div className={styles.user}>
                                        <img src="image/reviewer-2.png" alt=""/>
                                        <div className={styles.userInfo}>
                                            <h3>Peter Middleton</h3>
                                            <div className={styles.stars}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`${styles.slide} swiper-slide`}>
                                    <i className={`${styles.quotes} fas fa-quote-right`}></i>
                                    <div className={styles.user}>
                                        <img src="image/my_img.jpg" alt=""/>
                                        <div className={styles.userInfo}>
                                            <h3>Milton Francis</h3>
                                            <div className={styles.stars}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`${styles.slide} swiper-slide`}>
                                    <i className={`${styles.quotes} fas fa-quote-right`}></i>
                                    <div className={styles.user}>
                                        <img src="image/reviewer-1.png" alt=""/>
                                        <div className={styles.userInfo}>
                                            <h3>Micheal Ford</h3>
                                            <div className={styles.stars}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`${styles.slide} swiper-slide`}>
                                    <i className={`${styles.quotes} fas fa-quote-right`}></i>
                                    <div className={styles.user}>
                                        <img src="image/reviewer-3.png" alt=""/>
                                        <div className={styles.userInfo}>
                                            <h3>Paulette Graham</h3>
                                            <div className={styles.stars}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`${styles.slide} swiper-slide`}>
                                    <i className={`${styles.quotes} fas fa-quote-right`}></i>
                                    <div className={styles.user}>
                                        <img src="image/reviewer-4.png" alt=""/>
                                        <div className={styles.userInfo}>
                                            <h3>Lisa Brown</h3>
                                            <div className={styles.stars}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                                </div>
                            </SwiperSlide>

                            
                </Swiper>
        </div>
</section>
  )
}

export default Reviews