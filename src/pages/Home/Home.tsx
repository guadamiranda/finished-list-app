import React, { useEffect } from 'react';
import homeStyle from './home.module.scss';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';

export default function Home() {

    useEffect(() => {
        cardWrapper()
    })

    const cardWrapper = () => {
        var cards = document.querySelectorAll(`div`);
        console.log(cards)

        cards.forEach(function(card, index) {
        setTimeout(function() {
            card.classList.remove(`${homeStyle.cardWrapper}`);
            card.classList.add(`${homeStyle.visible}`);
        }, 60 * index);
  } );
    }

    return(
        <div className={homeStyle.home}>
            <div className={homeStyle.home__title}>
                <Title/>
            </div>

            <div className={homeStyle.home__options}>
                <div className={homeStyle.cardWrapper}><Card title='Finished' number=''/></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Card title='Playing' number=''/></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Card title='To Play' number=''/></div>
            </div>
            
        </div>
    )
}