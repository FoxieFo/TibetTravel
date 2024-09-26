import s from './styles.module.scss';

import Button from '../ui/Button/Button';

import Logo from '../../assets/images/icons/logo.svg';

export default function Header() {
    return (
        <header className={s.header__container}>
            <img src={Logo} alt="Logo" />
            <div className={s.header__menu}>
                <ul className={s.header__options}>
                    <li className={s.header__optionsItem}>Home</li>
                    <li className={s.header__optionsItem}>About</li>
                    <li className={s.header__optionsItem}>Tour program</li>
                    <li className={s.header__optionsItem}>Pricing</li>
                    <li className={s.header__optionsItem}>Blog</li>
                    <li className={s.header__optionsItem}>Contacts</li>
                </ul>
                <Button className={s.header__button} title='Consultation'/>
            </div>
        </header>
    );
}