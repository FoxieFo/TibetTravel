import s from './styles.module.scss';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonCstm from '../ui/Button/Button';

import Logo from '../../assets/images/icons/logo.svg';

const ArrowIcon = () => (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.7154 8.6098L3.26527 4.15975C3.16235 4.05675 3.02495 4 2.87845 4C2.73195 4 2.59455 4.05675 2.49162 4.15975L2.1639 4.48739C1.95065 4.70089 1.95065 5.04788 2.1639 5.26105L5.90078 8.99793L2.15975 12.739C2.05683 12.842 2 12.9793 2 13.1257C2 13.2723 2.05683 13.4096 2.15975 13.5127L2.48748 13.8402C2.59048 13.9433 2.7278 14 2.8743 14C3.0208 14 3.1582 13.9433 3.26113 13.8402L7.7154 9.38613C7.81857 9.2828 7.87524 9.14484 7.87491 8.99817C7.87524 8.85094 7.81857 8.71305 7.7154 8.6098Z" fill="currentColor" />
    </svg>
);

const CloseIcon = ({ onClick }) => (
    <div className={s.header__closeIcon} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <ButtonCstm className={s.header__button} title='Consultation' />
                <div className={s.header__hamburger}>
                    <Button variant="primary" onClick={handleShow}>
                        <div className={s.header__hamburgerLines}>
                            <span className={s.header__hamburgerLinesLine}></span>
                            <span className={s.header__hamburgerLinesLine}></span>
                            <span className={s.header__hamburgerLinesLine}></span>
                        </div>
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <div className={s.header__hamburgerOffcanvas}>
                            <Offcanvas.Header>
                                <CloseIcon onClick={handleClose} />
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className={s.header__hamburgerOffcanvasOptions}>
                                    <li className={s.header__hamburgerOffcanvasOptionsOption}><ArrowIcon /> About</li>
                                    <li className={s.header__hamburgerOffcanvasOptionsOption}><ArrowIcon /> Tour program</li>
                                    <li className={s.header__hamburgerOffcanvasOptionsOption}><ArrowIcon /> Pricing</li>
                                    <li className={s.header__hamburgerOffcanvasOptionsOption}><ArrowIcon /> Blog</li>
                                    <li className={s.header__hamburgerOffcanvasOptionsOption}><ArrowIcon /> Contacts</li>
                                </ul>
                            </Offcanvas.Body>
                        </div>
                    </Offcanvas>
                </div>
            </div>
        </header>
    );
}