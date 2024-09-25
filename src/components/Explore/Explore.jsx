import s from './styles.module.scss';
import { useState } from 'react';

import PlayButton from './../../assets/images/icons/play-video.svg'
import Mountains from './../../assets/images/photos/landscape-1.png'
import Village from './../../assets/images/photos/landscape-2.png'

import Button from '../ui/Button/Button';
import VideoModal from '../ui/VideoModal/VideoModal';

export default function Explore() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleVideoOpen = () => {
        setIsVideoOpen(true);
    };

    const handleVideoClose = () => {
        setIsVideoOpen(false);
    };

    return (
        <div className={s.explore__container}>
            <div className={s.explore__content}>
                <div className={s.explore__media}>
                    <img className={s.explore__mediaImage} alt='Mountains' src={Mountains}>
                    </img>
                    <div className={s.explore__mediaVideo}>
                        <img className={s.explore__mediaVideoImg} alt='Village' src={Village}>
                        </img>
                        <button className={s.explore__mediaVideoBtn} onClick={handleVideoOpen}>
                            <img src={PlayButton} alt="Play" />
                        </button>
                    </div>
                </div>
                <div className={s.explore__info}>
                    <span className={s.explore__infoAbout}>о нашем походе</span>
                    <h1 className={s.explore__infoExplore}>Исследуйте все горные массивы мира вместе с нами</h1>
                    <p className={s.explore__infoText}>Присоединяйтесь к нашим группам на увлекательные походы по живописным маршрутам, где вы сможете не только насладиться великолепием природы, но и встретить единомышленников. Наши опытные гиды обеспечат безопасное и комфортное путешествие, расскажут о местной флоре и фауне, а также поделятся интересными историями о регионах, которые мы будем исследовать.</p>
                    <Button title={'Программа тура'} />
                </div>
                <VideoModal isOpen={isVideoOpen} onClose={handleVideoClose} />
            </div>
        </div>
    );
}