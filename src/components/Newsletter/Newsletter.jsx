import Button from '../ui/Button/Button';
import s from './styles.module.scss';

export default function Newsletter() {
    return (
        <section className={s.newsletter__container}>
            <div className={s.newsletter__content}>
                <div className={s.newsletter__title}>
                    <span className={s.newsletter__titleYellow}>stay inspired</span>
                    <span className={s.newsletter__titleBlack}>Discover the best travel tips and updates</span>
                </div>
                <div className={s.newsletter__subscribe}>
                    <h5 className={s.newsletter__subscribeTitle}>Enter your email address</h5>
                    <div className={s.newsletter__subscribeForm}>
                        <input type="text" placeholder="name@domain.com" className={s.newsletter__subscribeFormInput} />
                        <Button title={'Subscribe to updates'} />
                    </div>
                    <div className={s.newsletter__subscribePolicy}>
                        By subscribing, you automatically agree to the{' '}
                        <a href="/" className={s.newsletter__subscribePolicyLink}>
                            terms of personal data processing
                        </a>{' '}
                        and{' '}
                        <a href="/" className={s.newsletter__subscribePolicyLink}>
                            promotional mailing rules
                        </a>.
                    </div>
                </div>
            </div>
        </section>
    );
}