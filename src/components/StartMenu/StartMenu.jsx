import s from './styles.module.scss';
import Header from '../Header/Header';
import FindRoute from '../FindRoute/FindRoute';

export default function StartMenu() {
    return (
        <div className={s.start__bg}>
            <div className={s.start__container}>
                <Header />
                <div className={s.start__menu}>
                    <p className={s.start__menuText}>Насладись прогулкой в горах
                    с командой единомышленников</p>
                    <FindRoute />
                </div>
            </div>
        </div>
    );
}