import titleStyle from './title.module.scss'

interface title {
    name: string;
}

export default function Title(props:title) {
    return(
        <div className={titleStyle.title}>
            {props.name}
        </div>
    )
}