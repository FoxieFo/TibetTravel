import s from './styles.module.scss';

import Telegram from './../../assets/images/icons/socials/telegram.svg'
import Vk from './../../assets/images/icons/socials/vk.svg'
import Pinterest from './../../assets/images/icons/socials/pinterest.svg'
import Skype from './../../assets/images/icons/socials/skype.svg'
import Arrow from './../../assets/images/icons/arrow.svg'

export default function Footer() {
    return (
        <footer className={s.footer__bg}>
            <div className={s.footer__container}>
                <div className={s.footer__content}>
                    <div className={s.footer__contentInfo}>
                        <div className={s.footer__contentInfoTitle}>WanderWave</div>
                        <div className={s.footer__contentInfoText}>WanderWave is your go-to travel partner, dedicated to crafting unforgettable adventures around the globe. We are here to help you ride the wave of your next adventure. Let’s make your travel dreams a reality!</div>
                        <div className={s.footer__contentInfoAddress}>
                            <span className={s.footer__contentInfoAddressEmail}>info@domain.com</span>
                            <span className={s.footer__contentInfoAddressPhone}>+1 (234) 567-89-10</span>
                        </div>
                        <div className={s.footer__contentInfoSocials}>
                            <img className={s.footer__contentInfoSocialsItem} src={Telegram} alt="Telegram" />
                            <img className={s.footer__contentInfoSocialsItem} src={Vk} alt="Vk" />
                            <img className={s.footer__contentInfoSocialsItem} src={Pinterest} alt="Pinterest" />
                            <img className={s.footer__contentInfoSocialsItem} src={Skype} alt="Skype" />
                        </div>
                    </div>
                    <div className={s.footer__contentServices}>
                        <h3 className={s.footer__contentServicesTitle}>Our services</h3>
                        <ul className={s.footer__contentServicesList}>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Summer mountain hikes</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Winter mountain expeditions</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Temple visits in the mountains</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Extreme adventure tourism</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Hikes in the amazon jungle</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Trip to Africa</a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.footer__contentServices}>
                    <h3 className={s.footer__contentServicesTitle}>Important</h3>
                        <ul className={s.footer__contentServicesList}>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">How to pack for a long hike?</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Essential items for hiking</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">Medical insurance and safety guarantees</a>
                            </li>
                            <li className={s.footer__contentServicesListItem}>
                                <img src={Arrow} alt="Arrow" />
                                <a href="/">If you’re a doctor, check this out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}