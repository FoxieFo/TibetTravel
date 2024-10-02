import s from './styles.module.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Button from '../ui/Button/Button';

import Turkey from './../../assets/images/photos/landscape-14.png';
import Photo from './../../assets/images/photos/landscape-15.png';
import Dubai from './../../assets/images/photos/landscape-16.png';
import Beach from './../../assets/images/photos/landscape-17.png';
import Canyon from './../../assets/images/photos/landscape-18.png';
import Notes from './../../assets/images/photos/landscape-19.png';

import ImageModal from '../ui/ImageModal/ImageModal';

const images = [Turkey, Photo, Dubai, Beach, Canyon, Notes];

export default function Impressions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 719);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={s.impressions__container}>
            <div className={s.impressions__content}>
                <div className={s.impressions__title}>
                    <span className={s.impressions__titleYellow}>photo recap</span>
                    <span className={s.impressions__titleBlack}>Sharing our impressions</span>
                </div>
                <div className={s.impressions__images}>
                    {isMobile ? (
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={25}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            speed={8000}
                            style={{ maxWidth: '100%' }}
                            modules={[Autoplay]}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index} style={{ width: '285px' }}>
                                    <div
                                        className={`${s[`pic${index + 1}`]} ${s.picWrapper}`}
                                    >
                                        <img className={s.pic} src={image} alt={`pic${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        images.map((image, index) => (
                            <div
                                key={index}
                                className={`${s[`pic${index + 1}`]} ${s.picWrapper}`}
                                onClick={() => openModal(index)}
                            >
                                <img className={s.pic} src={image} alt={`pic${index + 1}`} />
                            </div>
                        ))
                    )}
                </div>
                <div className={s.impressions__button}>
                    <Button title={'Check our Pinterest'} />
                </div>
            </div>
            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                images={images}
                currentIndex={currentImageIndex}
            />
        </section>
    );
}