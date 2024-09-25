import s from './styles.module.scss';

import Coffee from './../../assets/images/photos/landscape-3.png'
import Hiking from './../../assets/images/photos/landscape-4.png'
import SnowSports from './../../assets/images/photos/landscape-5.png'
import River from './../../assets/images/photos/landscape-6.png'
import Guide from './../../assets/images/icons/guide.svg'
import Safety from './../../assets/images/icons/safety.svg'
import Prices from './../../assets/images/icons/prices.svg'

export default function BestOffer() {
    return (
        <div className={s.bestoffer__bg}>
            <div className={s.bestoffer__container}>
                <div className={s.bestoffer__info}>
                    <div className={s.bestoffer__infoHeadline}>
                        <span>наше предложение</span>#
                        <h1>Лучшие программы для тебя</h1>
                        <p>Наша команда предлагает уникальные программы, разработанные с учетом ваших интересов и потребностей.</p>
                    </div>
                    <div className={s.bestoffer__infoHighlights}>
                        <div className={s.bestoffer__infoHighlightsItem}>
                            <img className={s.bestoffer__infoHighlightsItemImg} src={Guide} alt="Guide" />
                            <div className={s.bestoffer__infoHighlightsItemInfo}>
                                <span>Опытный гид</span>
                                <p>Наши профессиональные гиды обладают глубокими знаниями местной флоры и фауны, а также опытом в организации безопасных и интересных походов.</p>
                            </div>
                        </div>
                        <div className={s.bestoffer__infoHighlightsItem}>
                            <img className={s.bestoffer__infoHighlightsItemImg} src={Safety} alt="Safety" />
                            <div className={s.bestoffer__infoHighlightsItemInfo}>
                                <span>Безопасный поход</span>
                                <p>Безопасность — наш главный приоритет. Мы тщательно планируем каждый маршрут и обеспечиваем необходимое снаряжение, чтобы вы могли наслаждаться походом без лишних забот.</p>
                            </div>
                        </div>
                        <div className={s.bestoffer__infoHighlightsItem}>
                            <img className={s.bestoffer__infoHighlightsItemImg} src={Prices} alt="Prices" />
                            <div className={s.bestoffer__infoHighlightsItemInfo}>
                                <span>Лояльные цены</span>
                                <p>Мы стремимся сделать приключения доступными для всех. Наша ценовая политика прозрачна и лояльна, чтобы каждый мог испытать радость путешествий без финансового стресса.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.bestoffer__media}>
                    <img className={s.bestoffer__mediaImg} src={Coffee} alt="" />
                    <img className={s.bestoffer__mediaImg} src={Hiking} alt="" />
                    <img className={s.bestoffer__mediaImg} src={SnowSports} alt="" />
                    <img className={s.bestoffer__mediaImg} src={River} alt="" />
                </div>
            </div>
        </div>
    );
}