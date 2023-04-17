import itemStyle from './items.module.scss'

interface item {
    name: string;
    duration: number;
    console: string;
    icon: string;
    qualification: number
}

export default function Item(props:item) {
    return(
        <div className={itemStyle.item}>
            <div className={itemStyle.item__img}></div>
            <div className={itemStyle.item__information}>
                <span className={itemStyle.item__information__title}>{props.name}</span>
                <span className={itemStyle.item__information__info}>Time played: {props.duration} hours</span>
                <span className={itemStyle.item__information__info}>Console: {props.console}</span>
            </div>
        </div>
    )
}