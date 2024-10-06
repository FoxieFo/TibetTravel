import s from './styles.module.scss';

const CloseIcon = ({ onClick }) => (
    <div className={s.videomodal__closebutton} onClick={onClick}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

export default function VideoModal ({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={s.videomodal}>
            <div className={s.videomodal__overlay} onClick={onClose}></div>
            <div className={s.videomodal__content}>
                <CloseIcon onClick={onClose}/>
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