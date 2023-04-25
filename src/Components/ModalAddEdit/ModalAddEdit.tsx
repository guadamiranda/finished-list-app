import modalAddEditStyle from './modalAddEdit.module.scss'
import { IoClose } from 'react-icons/io5'

interface modalInfo {
    title: string | null;
    duration: number | null;
    console: string | null;
    img: string | null;
    isOpenModalAddEdit: boolean;
    setIsOpenModalAddEdit: any;
    isAdd: boolean;
    isFinished: boolean;
}

export default function ModalAddEdit(props:modalInfo) {
    return(
        <>
        { props.isOpenModalAddEdit ? (
                <div className={modalAddEditStyle.modal} id='modal'>
                    <div className={modalAddEditStyle.modal__container}>
                    <div onClick={() => props.setIsOpenModalAddEdit(false)} className={modalAddEditStyle.modal__container__header}>{props.isFinished? <span>Add Game</span> : <span>Edit Game</span>}<IoClose/></div>
                        <div className={modalAddEditStyle.modal__container__body}>
                            <br/>

                            <div className={modalAddEditStyle.modal__container__body__info}>
                                <span><b>Title:</b> </span>
                                <input></input>
                            </div>

                            {props.isFinished? 
                            <div className={modalAddEditStyle.modal__container__body__info}>
                                <span><b>Time to finish:</b> </span>
                                <input></input>
                            </div> : null
                            }       
                            
                            <div className={modalAddEditStyle.modal__container__body__info}>
                                <span><b>Console:</b> </span>
                                <input></input>
                            </div>

                            <div className={modalAddEditStyle.modal__container__body__info}>
                                <span><b>Cover: </b> </span>
                                <button>Add img</button>
                            </div>

                        </div>
                    </div>
                </div> 
            ) : null 
        }
        </>   
    )
}