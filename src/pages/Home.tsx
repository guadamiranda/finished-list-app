import React, { useEffect } from 'react';
import Link from 'next/link';
import homeStyle from '../styles/home.module.scss';
import Title from '../Components/Title/Title';
import Card from '../Components/Card/Card';

export default function Home() {

    const cardWrapper = () => {
        var cards = document.querySelectorAll(`div`);

        cards.forEach(function(card, index) {
        setTimeout(function() {
            card.classList.remove(`${homeStyle.cardWrapper}`);
            card.classList.add(`${homeStyle.visible}`);
        }, 60 * index);
        } );
    }

    useEffect(() => {
        cardWrapper()
    })

    return(
        <div className={homeStyle.home}>
            <div className={homeStyle.home__title}>
                <Title name='Welcome to your list'/>
            </div>

            <div className={homeStyle.home__options}>
                <div className={homeStyle.cardWrapper}><Link className={homeStyle.cardWrapper__cardLink} href='/GameListPage?name=Finished'><Card title='Finished' number='' /></Link></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Link className={homeStyle.cardWrapper__cardLink} href='/GameListPage?name=Playing'><Card title='Playing' number=''/></Link></div>
                <br></br>
                <div className={homeStyle.cardWrapper}><Link className={homeStyle.cardWrapper__cardLink} href='/GameListPage?name=ToPlay'><Card title='To Play' number=''/></Link></div>
            </div>   
        </div>
    )
}