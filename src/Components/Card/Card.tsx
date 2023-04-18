import cardStyle from './card.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'

interface cardInformation {
    title: string;
    number: string;
}

export default function Card(props:cardInformation) {
    return(
        <div className={cardStyle.card}>
            <div className={cardStyle.card__leftSide}>
                <MdArrowForwardIos/>
            </div>
            <div className={cardStyle.card__rigthSide}>
                <div className={cardStyle.card__rigthSide__title}>{props.title}</div>
                <div className={cardStyle.card__rigthSide__number}> Number of Games: {props.number}</div>  
            </div>
        </div>
    )
}