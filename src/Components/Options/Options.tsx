import React, { useEffect } from 'react';
import optionStyle from './options.module.scss'
import { MdOutlineDelete, MdOutlineModeEdit, MdAddCircleOutline } from 'react-icons/md'

export default function Card() {
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