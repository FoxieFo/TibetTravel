import s from './styles.module.scss';
import Header from '../Header/Header';
import FindRoute from '../ui/FindRoute/FindRoute';

export default function StartMenu() {
    return (
        <div className={s.start__bg}>
            <div className={s.start__container}>
                <Header />
                <div className={s.start__menu}>
                    <p className={s.start__menuText}>Enjoy a mountain hike with a group of like-minded adventurers</p>
                    <FindRoute />
                </div>
            </div>
        </div>
    );
}