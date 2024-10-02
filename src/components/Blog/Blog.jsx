import s from './styles.module.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import ArticleCard from '../ui/ArticleCard/ArticleCard';
import Button from '../ui/Button/Button';

import Italy from './../../assets/images/photos/landscape-10.png'
import Plane from './../../assets/images/photos/landscape-11.png'
import City from './../../assets/images/photos/landscape-12.png'
import India from './../../assets/images/photos/landscape-13.png'

export default function Blog() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 745);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={s.blog__bg}>
            <div className={s.blog__container}>
                <div className={s.blog__content}>
                    <div className={s.blog__title}>
                        <span className={s.blog__titleYellow}>journey highlights</span>
                        <span className={s.blog__titleBlack}>Travel blog</span>
                    </div>
                    <div className={s.blog__articlecards}>
                        {isMobile ? (
                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={25}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                style={{ maxWidth: '100%' }}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide style={{ width: '285px' }}>
                                    <ArticleCard
                                        img={Italy}
                                        date={'01/04/2024'}
                                        title={'Beautiful Italy: What\'s it really like?'}
                                        text={'From picturesque coastlines to vibrant cities, discover what Italy is truly like beyond the postcards. Explore hidden gems, local culture, and must-see spots that will make you fall in love with the real Italy'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '285px' }}>
                                    <ArticleCard
                                        img={Plane}
                                        date={'08/04/2024'}
                                        title={'The whole world is open to you'}
                                        text={'Why wait? The sky\'s the limit! With endless destinations just a flight away, your next adventure is closer than you think. Pack your bags and let the world become your playground—no boundaries, just endless possibilities.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '285px' }}>
                                    <ArticleCard
                                        img={City}
                                        date={'10/04/2024'}
                                        title={'Ready, Set, Explore: Essential Tips for Solo Travelers'}
                                        text={'Get ready to embrace the freedom of exploring the world solo — your adventure awaits. Find out how solo travel can be both empowering and transformative.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '285px' }}>
                                    <ArticleCard
                                        img={India}
                                        date={'14/04/2024'}
                                        title={'India Awaits: Your Adventure Starts Here!'}
                                        text={'Immerse yourself in colorful festivals, savor delicious cuisine, and explore ancient temples. Get ready for a journey that promises unforgettable experiences at every turn.'}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        ) : (
                            <>
                                <ArticleCard img={Italy} date={'01/04/2024'} title={'Beautiful Italy: What\'s it really like?'} text={'From picturesque coastlines to vibrant cities, discover what Italy is truly like beyond the postcards. Explore hidden gems, local culture, and must-see spots that will make you fall in love with the real Italy'} />
                                <ArticleCard img={Plane} date={'08/04/2024'} title={'The whole world is open to you'} text={'Why wait? The sky\'s the limit! With endless destinations just a flight away, your next adventure is closer than you think. Pack your bags and let the world become your playground—no boundaries, just endless possibilities.'} />
                                <ArticleCard img={City} date={'10/04/2024'} title={'Ready, Set, Explore: Essential Tips for Solo Travelers'} text={'Get ready to embrace the freedom of exploring the world solo — your adventure awaits. Find out how solo travel can be both empowering and transformative.'} />
                                <ArticleCard img={India} date={'14/04/2024'} title={'India Awaits: Your Adventure Starts Here!'} text={'Immerse yourself in colorful festivals, savor delicious cuisine, and explore ancient temples. Get ready for a journey that promises unforgettable experiences at every turn.'} />
                            </>
                        )}
                    </div>
                    <div className={s.blog__button}>
                            <Button title={'Read more'} />
                    </div>
                </div>
            </div>
        </section>
    );
}