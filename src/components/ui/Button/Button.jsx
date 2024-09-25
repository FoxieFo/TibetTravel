import s from './styles.module.scss';

export default function Button({title, colorScheme = 'colorScheme__1', className}) {
    return (
        <button className={`${s.button} ${s[colorScheme]} ${className}`}>{title}</button>
    );
}