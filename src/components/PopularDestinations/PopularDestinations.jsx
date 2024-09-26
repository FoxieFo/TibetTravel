import s from './styles.module.scss';

import Lake from './../../assets/images/photos/landscape-7.png'
import NightSky from './../../assets/images/photos/landscape-8.png'
import MorningMountain from './../../assets/images/photos/landscape-9.png'
import Card from '../ui/Card/Card';

export default function PopularDestinations() {
    return (
        <div className={s.pdestinations__container}>
            <div className={s.pdestinations__content}>
                <div className={s.pdestinations__title}>
                    <span className={s.pdestinations__titleYellow}>traveler&apos;s choice</span>
                    <span className={s.pdestinations__titleBlack}>Popular destinations</span>
                </div>
                <div className={s.pdestinations__cards}>
                    <Card img={Lake} title={'Lake by the mountains'} subtitle={'a romantic adventure'} price={'480'} rating={4.9} text={'Imagine a serene lake nestled at the foot of towering mountains, the perfect backdrop for a romantic adventure. Escape the hustle of daily life and enjoy peaceful moments surrounded by nature&apos;s beauty, creating memories that will last a lifetime.'}/>
                    <Card img={NightSky} title={'Lake by the mountains'} subtitle={'a romantic adventure'} price={'480'} rating={4.9} text={'Imagine a serene lake nestled at the foot of towering mountains, the perfect backdrop for a romantic adventure. Escape the hustle of daily life and enjoy peaceful moments surrounded by nature&apos;s beauty, creating memories that will last a lifetime.'}/>
                    <Card img={MorningMountain} title={'Lake by the mountains'} subtitle={'a romantic adventure'} price={'480'} rating={4.9} text={'Imagine a serene lake nestled at the foot of towering mountains, the perfect backdrop for a romantic adventure. Escape the hustle of daily life and enjoy peaceful moments surrounded by nature&apos;s beauty, creating memories that will last a lifetime.'}/>
                </div>
            </div>
        </div>
    );
}