import s from './styles.module.scss';

export default function VideoModal ({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={s.videomodal}>
            <div className={s.videomodal__overlay} onClick={onClose}></div>
            <div className={s.videomodal__content}>
                <button className={s.videomodal__closebutton} onClick={onClose}>
                    ✖
                </button>
                <iframe
                    src="https://www.youtube.com/embed/bBRgYIvaL00?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};