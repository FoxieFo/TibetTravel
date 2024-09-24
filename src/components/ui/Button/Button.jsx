import s from './styles.module.scss';

export default function Button({title, colorScheme}) {
    return (
        <button className={s.button}>{title}</button>
    );
}