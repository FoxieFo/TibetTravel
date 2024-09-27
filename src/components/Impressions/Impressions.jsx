import s from './styles.module.scss';

import Button from '../ui/Button/Button';

import Turkey from './../../assets/images/photos/landscape-14.png'
import Photo from './../../assets/images/photos/landscape-15.png'
import Dubai from './../../assets/images/photos/landscape-16.png'
import Beach from './../../assets/images/photos/landscape-17.png'
import Canyon from './../../assets/images/photos/landscape-18.png'
import Notes from './../../assets/images/photos/landscape-19.png'


export default function Impressions() {
    return (
        <section className={s.impressions__container}>
            <div className={s.impressions__content}>
                <div className={s.impressions__title}>
                    <span className={s.impressions__titleYellow}>photo recap</span>
                    <span className={s.impressions__titleBlack}>Sharing our experiences</span>
                </div>
                <div className={s.impressions__images}>
                    <img className={`${s.pic1} ${s.pic}`} src={Turkey} alt="Hot air ballons" />
                    <img className={`${s.pic2} ${s.pic}`} src={Photo} alt="Travel plan" />
                    <img className={`${s.pic3} ${s.pic}`} src={Dubai} alt="Dubai" />
                    <img className={`${s.pic4} ${s.pic}`} src={Beach} alt="Beach" />
                    <img className={`${s.pic5} ${s.pic}`} src={Canyon} alt="Grand Canyon" />
                    <img className={`${s.pic6} ${s.pic}`} src={Notes} alt="Traveller's notes" />
                </div>
                <div className={s.impressions__button}>
                        <Button title={'Check our Pinterest'}/>
                </div>
            </div>
        </section>
    );
}