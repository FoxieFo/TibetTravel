import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import s from './styles.module.scss';

export default function FindRoute() {
    const locations = ['China', 'Thailand', 'India', 'Malaysia', 'Vietnam', 'Japan', 'Singapore'];
    const participants = ['4', '5-6', '7-8', '9-10', '10+'];

    return (
        <>
            <div className={s.findroute__container}>
            <DropDown title={'Tour location'} subtitle={'select from the list'} options={locations}/>
<DropDown title={'Hiking date'} subtitle={'specify the range'} calendar={true}/>
<DropDown title={'Participants'} subtitle={'minimum of 4 people'} options={participants}/>
<Button title={'Find a program'} colorScheme='colorScheme__2' className={s.findroute__button}/>
            </div>
        </>
    );
}