import React from 'react';
import gameListStyle from '../styles/gameListPage.module.scss';
import Title from '@/Components/Title/Title';
import Options from '../Components/Options/Options'
import Item from '../Components/Item/Item';
import { useRouter } from 'next/router'

export default function GameListPage() {
    const router = useRouter()
    const {name} = router.query 

    return(
        <div className={gameListStyle.list}>
            <div className={gameListStyle.list__title}>
                <Title name={ name }/>
            </div>  
            <br/>
            <div className={gameListStyle.body}>
                <div className={gameListStyle.body__options}> 
                    <Options/>
                </div>
                <br/>
                <div className={gameListStyle.body__list}>
                    <Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='The Legend of Zelda' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='Mario Bros. 3' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='STALKER' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='The Legend of Zelda' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='Mario Bros. 3' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='STALKER' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='game' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='The Legend of Zelda' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='Mario Bros. 3' duration={6} console='nes' icon='icon' qualification={7} />
                    <Item name='STALKER' duration={6} console='nes' icon='icon' qualification={7} />
                </div>
            </div>
        </div>
    )
}