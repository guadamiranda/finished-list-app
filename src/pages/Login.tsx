import loginStyle from '../styles/login.module.scss'
import LoginCard from '../Components/LoginCard/LoginCard.tsx'

export default function Login() {
    return(
        <div className={loginStyle.login}>
            <LoginCard/>
        </div>
    )
}