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
                    <br/>
                    <br/>
                    <span className={loginCardStyle.loginCardContainer__rightSide__information__spans}>User Name:</span>
                    <input></input>
                    <br/>
                    <span className={loginCardStyle.loginCardContainer__rightSide__information__spans}>Password:</span>
                    <input></input>
                    <br/>
                    <br/>
                    <button>Enter</button>
                </div>
            </div>
        </div>
    )
}