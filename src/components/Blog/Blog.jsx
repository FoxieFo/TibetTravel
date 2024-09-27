import ArticleCard from '../ui/ArticleCard/ArticleCard';
import Button from '../ui/Button/Button';
import s from './styles.module.scss';

import Italy from './../../assets/images/photos/landscape-10.png'
import Plane from './../../assets/images/photos/landscape-11.png'
import City from './../../assets/images/photos/landscape-12.png'
import India from './../../assets/images/photos/landscape-13.png'

export default function Blog() {
    return (
        <div className={s.blog__bg}>
            <div className={s.blog__container}>
                <div className={s.blog__content}>
                    <div className={s.blog__title}>
                        <span className={s.blog__titleYellow}>journey highlights</span>
                        <span className={s.blog__titleBlack}>Travel blog</span>
                    </div>
                    <div className={s.blog__articlecards}>
                        <ArticleCard img={Italy} date={'01/04/2024'} title={'Beautiful Italy: What\'s it really like?'} text={' From picturesque coastlines to vibrant cities, discover what Italy is truly like beyond the postcards. Explore hidden gems, local culture, and must-see spots that will make you fall in love with the real Italy'}/>
                        <ArticleCard img={Plane} date={'08/04/2024'} title={'The whole world is open to you'} text={'Why wait? The sky\'s the limit! With endless destinations just a flight away, your next adventure is closer than you think. Pack your bags and let the world become your playground—no boundaries, just endless possibilities.'}/>
                        <ArticleCard img={City} date={'10/04/2024'} title={'Ready, Set, Explore: Essential Tips for Solo Travelers'} text={'Get ready to embrace the freedom of exploring the world solo—your adventure awaits'}/>
                        <ArticleCard img={India} date={'14/04/2024'} title={'India Awaits: Your Adventure Starts Here!'} text={'Immerse yourself in colorful festivals, savor delicious cuisine, and explore ancient temples. Get ready for a journey that promises unforgettable experiences at every turn.'}/>
                    </div>
                    <div className={s.blog__button}>
                        <Button title={'Read more'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}