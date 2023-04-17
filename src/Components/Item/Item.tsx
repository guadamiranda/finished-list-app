import itemStyle from './items.module.scss'

interface item {
    name: string;
    duration: number;
    console: string;
    icon: string;
    qualification: number;
}

export default function Item(props:item) {

    const GameName = () => {
        const name = props.name;
        const maxChar = 21;

        const shortName = name.length > maxChar ? name.slice(0, 21) + '...' : name
        return (
            <>{shortName}</>
        )

    }
    return(
        <div className={itemStyle.item}>
            <div className={itemStyle.item__img}></div>
            <div className={itemStyle.item__information}>
                <span className={itemStyle.item__information__title}><GameName/></span>
                <span className={itemStyle.item__information__info}><b>Time played:</b> {props.duration} hours</span>
                <span className={itemStyle.item__information__info}><b>Console:</b> {props.console}</span>
            </div>
        </div>
    )
}