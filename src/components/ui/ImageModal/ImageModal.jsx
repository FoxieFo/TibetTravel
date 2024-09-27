import s from './styles.module.scss';
import { useState, useEffect } from 'react';

import Next from './../../../assets/images/icons/next.svg'
import Prev from './../../../assets/images/icons/prev.svg'

export default function ImageModal ({ isOpen, onClose, images, currentIndex }) {
    const [currentIndexState, setCurrentIndexState] = useState(currentIndex);

    useEffect(() => {
        setCurrentIndexState(currentIndex);
    }, [currentIndex]);

    if (!isOpen) return null;

    const handlePrev = () => {
        setCurrentIndexState((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndexState((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={s.imagemodal}>
            <div className={s.imagemodal__overlay} onClick={onClose}></div>
            <div className={s.imagemodal__content}>
                <button className={s.imagemodal__closebutton} onClick={onClose}>
                    close ✖
                </button>
                <div className={s.imagemodal__modalinner}>
                    <button className={s.imagemodal__modalinnerPrev} onClick={handlePrev}></button>
                    <img src={images[currentIndexState]} className={s.imagemodal__modalinnerImage}/>
                    <button className={s.imagemodal__modalinnerNext} onClick={handleNext}></button>
                </div>
            </div>
        </div>
    );
}