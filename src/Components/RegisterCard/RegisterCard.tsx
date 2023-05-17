import Link from 'next/link';
import registerCardStyle from './registerCard.module.scss'

export default function RegisterCard() {
    return(
        <div className={registerCardStyle.registerCardContainer}>
            <div className={registerCardStyle.registerCardContainer__leftSide}>
                <div className={registerCardStyle.registerCardContainer__rightSide__information}>
                    <span className={registerCardStyle.registerCardContainer__rightSide__information__title}>REGISTER</span>
                    <span className={registerCardStyle.registerCardContainer__rightSide__information__spans}>User Name:</span>
                    <input type='text'></input>
                    <span className={registerCardStyle.registerCardContainer__rightSide__information__spans}>Mail:</span>
                    <input type='email'></input>
                    <span className={registerCardStyle.registerCardContainer__rightSide__information__spans}>Password:</span>
                    <input type='password'></input>
                    <span className={registerCardStyle.registerCardContainer__rightSide__information__spans}>Repeat Password:</span>
                    <input type='password'></input>
                    <div className={registerCardStyle.registerCardContainer__rightSide__information__button}>Enter</div>
                    <div className={registerCardStyle.registerCardContainer__rightSide__forgotPasswordOrNotUser}>
                    hi
                    </div>
                </div>
            </div>
            <div className={registerCardStyle.registerCardContainer__rightSide}>
                <div className={registerCardStyle.registerCardContainer__leftSide__gif}></div>
            </div>
        </div>
    )
}