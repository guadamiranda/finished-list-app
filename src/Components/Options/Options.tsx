import React, { useEffect, useState } from 'react';
import optionStyle from './options.module.scss'
import ModalAddEdit from '../ModalAddEdit/ModalAddEdit';
import { MdOutlineDelete, MdOutlineModeEdit, MdAddCircleOutline } from 'react-icons/md'

interface option {
    gameState: string;
}

export default function Card(props:option) {
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const cardWrapper = () => {
        var cards = document.querySelectorAll(`div`);

        cards.forEach(function(card, index) {
        setTimeout(function() {
            card.classList.remove(`${optionStyle.cardWrapper}`);
            card.classList.add(`${optionStyle.visible}`);
        }, 60 * index);
        } );
    }

    useEffect(() => {
        cardWrapper()
    })

    return(
        <div className={optionStyle.option}>
            {modalAdd && <ModalAddEdit title={null} duration={null} console={null} img={null} isOpenModalAddEdit={modalAdd} setIsOpenModalAddEdit={setModalAdd} isAdd={true} isFinished={props.gameState === 'Finished' ? true : false}/>}
            {modalEdit && <ModalAddEdit title={null} duration={null} console={null} img={null} isOpenModalAddEdit={modalEdit} setIsOpenModalAddEdit={setModalEdit} isAdd={false} isFinished={props.gameState != 'Finished' ? true : false}/>}
            <div className={optionStyle.option__item} onClick={() => setModalAdd(true)}>
                <MdAddCircleOutline className={optionStyle.option__item__icon}/>
                <span>Add</span>
            </div>
            <div className={optionStyle.option__item} onClick={() => console.log('delete')}>
                <MdOutlineDelete className={optionStyle.option__item__icon}/>
                <span>Delete</span>
            </div>
            <div className={optionStyle.option__item} onClick={() => setModalEdit(true)}>
                <MdOutlineModeEdit className={optionStyle.option__item__icon}/>
                <span>Edit</span>
            </div>
        </div>
    )
}