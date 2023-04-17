import optionStyle from './options.module.scss'
import { MdOutlineDelete, MdOutlineModeEdit, MdAddCircleOutline } from 'react-icons/md'

export default function Card() {
    return(
        <div className={optionStyle.option}>
            <div className={optionStyle.option__item}>
                <MdAddCircleOutline className={optionStyle.option__item__icon}/>
                <span>Add</span>
            </div>
            <div className={optionStyle.option__item}>
                <MdOutlineDelete className={optionStyle.option__item__icon}/>
                <span>Delete</span>
            </div>
            <div className={optionStyle.option__item}>
                <MdOutlineModeEdit className={optionStyle.option__item__icon}/>
                <span>Edit</span>
            </div>
        </div>
    )
}