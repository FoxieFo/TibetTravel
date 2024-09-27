import s from './styles.module.scss';
import Button from './../ui/Button/Button'

import Coffee from './../../assets/images/photos/landscape-3.png'
import Hiking from './../../assets/images/photos/landscape-4.png'
import SnowSports from './../../assets/images/photos/landscape-5.png'
import River from './../../assets/images/photos/landscape-6.png'
import Guide from './../../assets/images/icons/guide.svg'
import Safety from './../../assets/images/icons/safety.svg'
import Prices from './../../assets/images/icons/prices.svg'

export default function BestOffer() {
    return (
        <section className={s.bestoffer__bg}>
            <div className={s.bestoffer__container}>
                <div className={s.bestoffer__content}>
                    <div className={s.bestoffer__info}>
                        <div className={s.bestoffer__infoHeadline}>
                            <span className={s.bestoffer__infoHeadlineOffer}>we offer</span>
                            <h1 className={s.bestoffer__infoHeadlineHeading}>The best programs for you</h1>
                            <p className={s.bestoffer__infoHeadlineText}>Our team creates unique programs tailored to your interests and needs.</p>
                        </div>
                        <div className={s.bestoffer__infoHighlights}>
                            <div className={s.bestoffer__infoHighlightsItem}>
                                <img className={s.bestoffer__infoHighlightsItemImg} src={Guide} alt="Guide" />
                                <div className={s.bestoffer__infoHighlightsItemInfo}>
                                    <span className={s.bestoffer__infoHighlightsItemHeading}>Experienced guide</span>
                                    <p className={s.bestoffer__infoHighlightsItemText}>Our professional guides have in-depth knowledge of the local flora and fauna, as well as experience in organizing safe and interesting hikes.</p>
                                </div>
                            </div>
                            <div className={s.bestoffer__infoHighlightsItem}>
                                <img className={s.bestoffer__infoHighlightsItemImg} src={Safety} alt="Safety" />
                                <div className={s.bestoffer__infoHighlightsItemInfo}>
                                    <span className={s.bestoffer__infoHighlightsItemHeading}>Safe hike</span>
                                    <p className={s.bestoffer__infoHighlightsItemText}>Safety is our top priority. We carefully plan each route and provide the necessary equipment so you can enjoy the hike without worries.</p>
                                </div>
                            </div>
                            <div className={s.bestoffer__infoHighlightsItem}>
                                <img className={s.bestoffer__infoHighlightsItemImg} src={Prices} alt="Prices" />
                                <div className={s.bestoffer__infoHighlightsItemInfo}>
                                    <span className={s.bestoffer__infoHighlightsItemHeading}>Fair prices</span>
                                    <p className={s.bestoffer__infoHighlightsItemText}>We strive to make adventures accessible to everyone. Our pricing policy is transparent and fair, so that everyone can experience the joy of travel without financial stress.</p>
                                </div>
                            </div>
                        </div>
                        <Button title={'Program costs'}/>
                    </div>
                    <div className={s.bestoffer__media}>
                        <img className={s.bestoffer__mediaImg} src={Coffee} alt="Coffee" />
                        <img className={s.bestoffer__mediaImg} src={Hiking} alt="Hiking" />
                        <img className={s.bestoffer__mediaImg} src={SnowSports} alt="SnowSports" />
                        <img className={s.bestoffer__mediaImg} src={River} alt="River" />
                    </div>
                </div>
            </div>
        </section>
    );
}