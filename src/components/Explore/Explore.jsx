import s from './styles.module.scss';
import { useState } from 'react';

import PlayButton from './../../assets/images/icons/play-video.svg'
import Mountains from './../../assets/images/photos/landscape-1.png'
import Village from './../../assets/images/photos/landscape-2.png'

import Button from '../ui/Button/Button';
import VideoModal from '../ui/VideoModal/VideoModal';

export default function Explore() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeImg, setActiveImg] = useState('village');

    const handleVideoOpen = () => {
        setIsVideoOpen(true);
    };

    const handleVideoClose = () => {
        setIsVideoOpen(false);
    };

    const handleActiveImg = (image) => {
        setActiveImg(image);
    };

    return (
        <section className={s.explore__container}>
            <div className={s.explore__content}>
                <div className={s.explore__media}>
                    <div className={s.explore__mediaDesktop}>
                        <div className={`${s.explore__mediaVideo} ${activeImg === 'mountains' ? s.active : ''}`} onClick={() => handleActiveImg('mountains')}>
                            <img className={s.explore__mediaVideoImg} alt="Mountains" src={Mountains} />
                            <button className={s.explore__mediaVideoBtn} onClick={handleVideoOpen}>
                                <img src={PlayButton} alt="Play" />
                            </button>
                        </div>
                        <div className={`${s.explore__mediaVideo} ${activeImg === 'village' ? s.active : ''}`} onClick={() => handleActiveImg('village')}>
                            <img className={s.explore__mediaVideoImg} alt="Village" src={Village} />
                            <button className={s.explore__mediaVideoBtn} onClick={handleVideoOpen}>
                                <img src={PlayButton} alt="Play" />
                            </button>
                        </div>
                    </div>
                    <div className={s.explore__mediaMob}>
                        <img className={s.explore__mediaMobImg} alt="Village" src={Village} />
                        <button className={s.explore__mediaMobBtn} onClick={handleVideoOpen}>
                            <img src={PlayButton} alt="Play" />
                        </button>
                    </div>
                </div>
                <div className={s.explore__info}>
                    <span className={s.explore__infoAbout}>about our tour</span>
                    <h1 className={s.explore__infoExplore}> Explore all the mountain ranges of the world with us
                    </h1>
                    <p className={s.explore__infoText}> Join our groups for exciting hikes along scenic routes, where you’ll not only enjoy the beauty of nature but also meet like-minded people. Our experienced guides will ensure a safe and comfortable journey, share insights about local flora and fauna, and tell interesting stories about the regions we explore.
                    </p>
                    <Button title={'Tour program'} className={s.explore__infoButton} />
                </div>
                <VideoModal isOpen={isVideoOpen} onClose={handleVideoClose} />
            </div>
        </section>
    );
}