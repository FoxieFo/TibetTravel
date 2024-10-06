import s from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

export default function ImageModal({ isOpen, onClose, images, currentIndex }) {
    if (!isOpen) return null;

    const CloseIcon = ({ onClick }) => (
        <div className={s.imagemodal__closebutton} onClick={onClick}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    return (
        <div className={s.imagemodal}>
            <div className={s.imagemodal__overlay} onClick={onClose}></div>
            <div className={s.imagemodal__content}>
                <CloseIcon onClick={onClose} />
                <div className={s.imagemodal__modalinner}>
                    <Swiper
                        slidesPerView={1}
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={s.imagemodal__swiper}
                        initialSlide={currentIndex}
                        centeredSlides= {true}
                        centeredSlidesBounds= {true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide className={s.imagemodal__swiperSlide} key={index}>
                                <img src={image} alt={`Slide ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}