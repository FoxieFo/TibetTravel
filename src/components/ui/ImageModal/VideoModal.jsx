import s from './styles.module.scss';

export default function ImageModal ({ isOpen, onClose, images, currentIndex }) {
    if (!isOpen) return null;

    const handlePrev = () => {
    };

    const handleNext = () => {
    };

    return (
        <div className={s.imagemodal}>
            <div className={s.imagemodal__overlay} onClick={onClose}></div>
            <div className={s.imagemodal__content}>
                <button className={s.imagemodal__closebutton} onClick={onClose}>
                    ✖
                </button>
                <button className={s.prev} onClick={handlePrev}>←</button>
                <button className={s.next} onClick={handleNext}>→</button>
            </div>
        </div>
    );
};