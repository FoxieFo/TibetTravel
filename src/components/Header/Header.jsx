import s from './styles.module.scss';

import Button from '../ui/Button/Button';

import Logo from '../../assets/images/icons/logo.svg';

export default function Header() {
    return (
        <header className={s.header__container}>
            <img src={Logo} alt="Logo" />
            <ul className={s.header__menu}>
                <li className={s.header__menuItem}>Главная</li>
                <li className={s.header__menuItem}>Про гида</li>
                <li className={s.header__menuItem}>Программа тура</li>
                <li className={s.header__menuItem}>Стоимость</li>
                <li className={s.header__menuItem}>Блог</li>
                <li className={s.header__menuItem}>Контакты</li>
            </ul>
            <Button title='Консультация'/>
        </header>
    );
}