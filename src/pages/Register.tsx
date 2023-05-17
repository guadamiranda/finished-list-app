import RegisterStyle from '../styles/register.module.scss'
import RegisterCard from '../Components/RegisterCard/RegisterCard.tsx'

export default function Register() {
    return(
        <div className={RegisterStyle.register}>
            <RegisterCard/>
        </div>
    )
}