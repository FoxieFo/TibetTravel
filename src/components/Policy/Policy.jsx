import s from './styles.module.scss';

export default function Policy() {
    return (
        <section className={s.policy__bg}>
            <div className={s.policy__container}>
                <div className={s.policy__content}>
                    <a className={s.policy__contentName} target='_blank' href='https://www.figma.com/file/NrPZZU8u1sLytOicIHcIAx/%D0%A0%D1%83%D0%BC%D0%A2%D0%B8%D0%B1%D0%B5%D1%82?type=design&node-id=0-1&mode=design&t=apziinh4RtDEQTpG-0'>Designer: Yuriy Avanesov</a>
                    <a className={s.policy__contentLink} target='_blank'href='https://github.com/FoxieFo'>Web Developer: Victoria A.</a>
                </div>
            </div>
        </section>
    );
}