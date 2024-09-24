import s from './styles.module.scss';

import {logo} from '../../../public/icon.svg'

export default function Header() {
    return (
        <header className={s.header__container}>
            <img src={logo} alt="" />
            <p className={s.header__text}>Awesome Kanban Board</p>
            <div className={s.header__profile}>
            </div>
        </header>
    );
}