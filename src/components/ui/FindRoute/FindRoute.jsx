import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import s from './styles.module.scss';

export default function FindRoute() {
    const locations = ['Китай', 'Тайланд', 'Индия', 'Малайзия', 'Вьетнам', 'Япония', 'Сингапур'];
    const participants = ['4', '5-6', '7-8', '9-10', '10+'];

    return (
        <>
            <div className={s.findroute__container}>
                <DropDown title={'Локация для тура'} subtitle={'выберите из списка'} options={locations}/>
                <DropDown title={'Дата похода'} subtitle={'укажите диапазон'} calendar={true}/>
                <DropDown title={'Участники'} subtitle={'минимум 4 человека'} options={participants}/>
                <Button title={'Найти программу'} colorScheme='colorScheme__2' className={s.findroute__button}/>
            </div>
        </>
    );
}