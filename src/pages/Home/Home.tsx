import React, { useEffect } from 'react';
import Link from 'next/link';
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
                <div className={homeStyle.cardWrapper}><Link href='/finished'><Card title='Finished' number=''/></Link></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Link href='/playing'><Card title='Playing' number=''/></Link></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Link href='/toplay'><Card title='To Play' number=''/></Link></div>
            </div>
            
        </div>
    )
}