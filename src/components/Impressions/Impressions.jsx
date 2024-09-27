import { useState } from 'react';
import s from './styles.module.scss';

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

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={s.impressions__container}>
            <div className={s.impressions__content}>
                <div className={s.impressions__title}>
                    <span className={s.impressions__titleYellow}>photo recap</span>
                    <span className={s.impressions__titleBlack}>Sharing our impressions</span>
                </div>
                <div className={s.impressions__images}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`${s[`pic${index + 1}`]} ${s.pic}`}
                            src={image}
                            onClick={() => openModal(index)}
                        />
                    ))}
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