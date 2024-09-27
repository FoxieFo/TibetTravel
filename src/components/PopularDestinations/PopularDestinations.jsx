import s from './styles.module.scss';

import Lake from './../../assets/images/photos/landscape-7.png'
import NightSky from './../../assets/images/photos/landscape-8.png'
import MorningMountain from './../../assets/images/photos/landscape-9.png'
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';

export default function PopularDestinations() {
    return (
        <section className={s.pdestinations__container}>
            <div className={s.pdestinations__content}>
                <div className={s.pdestinations__title}>
                    <span className={s.pdestinations__titleYellow}>traveler&apos;s choice</span>
                    <span className={s.pdestinations__titleBlack}>Popular destinations</span>
                </div>
                <div className={s.pdestinations__cards}>
                    <Card img={Lake} title={'Lake by the mountains'} subtitle={'a romantic adventure'} price={'480'} rating={'4.9'} text={'Imagine a serene lake nestled at the foot of towering mountains, the perfect backdrop for a romantic adventure. Escape the hustle of daily life and enjoy peaceful moments surrounded by nature\'s beauty, creating memories that will last a lifetime.'}/>
                    <Card img={NightSky} title={'Night in the mountains'} subtitle={'with friends'} price={'500'} rating={'4.5'} text={'Experience the magic of a night in the mountains with friends. Gather around a cozy campfire, share stories under a blanket of stars, and revel in the beauty of nature. Create unforgettable memories as you bond over laughter, adventure, and the serenity of the great outdoors.'}/>
                    <Card img={MorningMountain} title={'Yoga in the mountains'} subtitle={'take care of yourself'} price={'230'} rating={'5.0'} text={'Immerse yourself in the tranquility of mountain yoga, where the fresh air and stunning views elevate your practice. Connect with nature, find your inner peace, and prioritize self-care in a serene setting. Join us for a rejuvenating experience that nurtures both body and soul.'}/>
                </div>
                <Button title={'Top destinations'} />
            </div>
        </section>
    );
}