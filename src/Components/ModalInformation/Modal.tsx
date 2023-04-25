import modalStyle from './modal.module.scss'
import { IoClose } from 'react-icons/io5'

interface modal {
    title: string;
    duration: number;
    console: string;
    img: string;
    isOpen: boolean;
    setIsOpen: any;
}

export default function Modal(props:modal) {
    return(
        <>
        { props.isOpen ? (
                <div className={modalStyle.modal} id='modal'>
                    <div className={modalStyle.modal__container}>
                    <div onClick={() => props.setIsOpen(false)} className={modalStyle.modal__container__header}><IoClose/></div>
                        <div className={modalStyle.modal__container__body}>
                            <div className={modalStyle.modal__container__body__img}>
                                
                            </div>
                            <span className={modalStyle.modal__container__body__title} >{props.title}</span>
                            <br/>
                            <span className={modalStyle.modal__container__body__info}><b>Console:</b> {props.console}</span>
                            <span className={modalStyle.modal__container__body__info}><b>Duration:</b> {props.duration}</span>
                            <br/>
                        </div>
                    </div>
                </div> 
            ) : null 
        }
        </>   
    )
}