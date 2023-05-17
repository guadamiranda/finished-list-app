import Link from 'next/link';
import loginCardStyle from './loginCard.module.scss'

export default function LoginCard() {
    return(
        <div className={loginCardStyle.loginCardContainer}>
            <div className={loginCardStyle.loginCardContainer__leftSide}>
                <div className={loginCardStyle.loginCardContainer__leftSide__gif}></div>
            </div>
            <div className={loginCardStyle.loginCardContainer__rightSide}>
                <div className={loginCardStyle.loginCardContainer__rightSide__information}>
                    <span className={loginCardStyle.loginCardContainer__rightSide__information__title}>LOGIN</span>
                    <span className={loginCardStyle.loginCardContainer__rightSide__information__spans}>User Name:</span>
                    <input></input>
                    <span className={loginCardStyle.loginCardContainer__rightSide__information__spans}>Password:</span>
                    <input></input>
                    <div className={loginCardStyle.loginCardContainer__rightSide__information__button}>Enter</div>
                </div>
                <div className={loginCardStyle.loginCardContainer__rightSide__forgotPasswordOrNotUser}>
                    <div className={loginCardStyle.loginCardContainer__rightSide__forgotPasswordOrNotUser__spans}>
                        <Link href='/Register' className={loginCardStyle.loginCardContainer__rightSide__forgotPasswordOrNotUser__noAccount}>Don't have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}