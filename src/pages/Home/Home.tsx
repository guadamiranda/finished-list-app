import homeStyle from './home.module.scss'
import Title from '../../Components/Title/Title'

export default function Home() {
    return(
        <div className={homeStyle.home}>
            <div className={homeStyle.home__title}>
                <Title/>
            </div>
            
        </div>
    )
}