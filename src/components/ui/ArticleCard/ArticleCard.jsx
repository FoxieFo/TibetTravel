import s from './styles.module.scss';

export default function ArticleCard({img, title, text, date}) {
    return (
        <div>
            <div className={s.articlecard__container}>
                <div className={s.articlecard__content}>
                    <img className={s.articlecard__img} src={img}/>
                    <div className={s.articlecard__info}>
                        <p className={s.articlecard__infoTitle}>{title}</p>
                        <p className={s.articlecard__infoText}>{text}</p>
                        <div className={s.articlecard__infoMore}>
                            <span className={s.articlecard__infoMoreDate}>{date}</span>
                            <a className={s.articlecard__infoMoreLink} href='/'>read now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}