import s from './styles.module.scss';

import Button from '../ui/Button/Button';

import Logo from '../../assets/images/icons/logo.svg';

export default function Header() {
    return (
        <header className={s.header__container}>
            <img src={Logo} alt="Logo" />
            <div className={s.header__menu}>
                <ul className={s.header__options}>
                    <li className={s.header__optionsItem}>Главная</li>
                    <li className={s.header__optionsItem}>Про гида</li>
                    <li className={s.header__optionsItem}>Программа тура</li>
                    <li className={s.header__optionsItem}>Стоимость</li>
                    <li className={s.header__optionsItem}>Блог</li>
                    <li className={s.header__optionsItem}>Контакты</li>
                </ul>
                <Button className={s.header__button} title='Консультация'/>
            </div>
        </header>
    );
}