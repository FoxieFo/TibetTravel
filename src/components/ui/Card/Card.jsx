import s from './styles.module.scss';

import Star from './../../../assets/images/icons/star.svg'
import Button from '../Button/Button';

export default function Card({title, subtitle, rating, price, text, img}) {
    return (
        <div className={s.card__container}>
            <div className={s.card__content}>
                <img className={s.card__image} src={img}/>
                <div className={s.card__info}>
                    <div className={s.card__infoWrapper}>
                        <div className={s.card__infoWrapperText}>
                            <h3 className={s.card__infoWrapperTextTitle}>{title}</h3>
                            <p className={s.card__infoWrapperTextSubtitle}>{subtitle}</p>
                        </div>
                        <span className={s.card__infoWrapperPrice}>{price} $</span>
                    </div>
                    <div className={s.card__infoContent}>
                        <p className={s.card__infoContentText}>{text}</p>
                        <Button title={'Tour program'} className={s.card__infoContentButton}/>
                    </div>
                </div>
                <span className={s.card__rating}>
                    <img src={Star}/> {rating}
                </span>
            </div>
        </div>
      );
}