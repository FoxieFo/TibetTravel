import s from './styles.module.scss';

import Telegram from './../../assets/images/icons/socials/telegram.svg';
import Vk from './../../assets/images/icons/socials/vk.svg';
import Pinterest from './../../assets/images/icons/socials/pinterest.svg';
import Skype from './../../assets/images/icons/socials/skype.svg';

const ArrowIcon = () => (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.7154 8.6098L3.26527 4.15975C3.16235 4.05675 3.02495 4 2.87845 4C2.73195 4 2.59455 4.05675 2.49162 4.15975L2.1639 4.48739C1.95065 4.70089 1.95065 5.04788 2.1639 5.26105L5.90078 8.99793L2.15975 12.739C2.05683 12.842 2 12.9793 2 13.1257C2 13.2723 2.05683 13.4096 2.15975 13.5127L2.48748 13.8402C2.59048 13.9433 2.7278 14 2.8743 14C3.0208 14 3.1582 13.9433 3.26113 13.8402L7.7154 9.38613C7.81857 9.2828 7.87524 9.14484 7.87491 8.99817C7.87524 8.85094 7.81857 8.71305 7.7154 8.6098Z" fill="currentColor" />
    </svg>
);

const services = [
    { id: 1, text: 'Summer mountain hikes', link: '/' },
    { id: 2, text: 'Winter mountain expeditions', link: '/' },
    { id: 3, text: 'Temple visits in the mountains', link: '/' },
    { id: 4, text: 'Extreme adventure tourism', link: '/' },
    { id: 5, text: 'Hikes in the Amazon jungle', link: '/' },
    { id: 6, text: 'Trip to Africa', link: '/' },
];

const importantItems = [
    { id: 1, text: 'How to pack for a long hike?', link: '/' },
    { id: 2, text: 'Essential items for hiking', link: '/' },
    { id: 3, text: 'Medical insurance and safety guarantees', link: '/' },
    { id: 4, text: 'If you’re a doctor, check this out', link: '/' },
];

const List = ({ items }) => (
    <ul className={s.footer__contentServicesList}>
        {items.map(item => (
            <li key={item.id} className={s.footer__contentServicesListItem}>
                <ArrowIcon />
                <a href={item.link}>{item.text}</a>
            </li>
        ))}
    </ul>
);

export default function Footer() {
    return (
        <footer className={s.footer__bg}>
            <div className={s.footer__container}>
                <div className={s.footer__content}>
                    <div className={s.footer__contentInfo}>
                        <div className={s.footer__contentInfoTitle}>Tibet Travel</div>
                        <div className={s.footer__contentInfoText}>
                            Tibet Travel is your go-to travel partner, dedicated to crafting unforgettable adventures around the globe. We are here to help you ride the wave of your next adventure. Let’s make your travel dreams a reality!
                        </div>
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
                        <List items={services} />
                    </div>
                    <div className={s.footer__contentServices}>
                        <h3 className={s.footer__contentServicesTitle}>Important</h3>
                        <List items={importantItems} />
                    </div>
                </div>
            </div>
        </footer>
    );
}