import React, { useState } from 'react';
import gameListStyle from '../styles/gameListPage.module.scss';
import Title from '@/Components/Title/Title';
import Options from '../Components/Options/Options'
import Item from '../Components/Item/Item';
import ModalInformation from '../Components/ModalInformation/Modal';
import { useRouter } from 'next/router'

export default function GameListPage() {
    const router = useRouter()
    const {name} = router.query 
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={gameListStyle.list}>
            {isOpen && <ModalInformation title='Tales of Monkey Island Complete Pack: Chapter 4 - The Trial and Execution of Guybrush Threepwood.' duration={9} console='NES' img='img' isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <div className={gameListStyle.list__title}>
                <Title name={ name }/>
            </div>  
            <br/>
            <div className={gameListStyle.body}>
                <div className={gameListStyle.body__options}> 
                    <Options gameState={name}/>
                </div>
                <br/>
                <div className={gameListStyle.body__list}>
                    <div onClick={() => setIsOpen(true)}><Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} /></div>
                    <div onClick={() => setIsOpen(true)}><Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} /></div>
                    <div onClick={() => setIsOpen(true)}><Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} /></div>
                    <div onClick={() => setIsOpen(true)}><Item name='The Binding of Isaac ' duration={6} console='nes' icon='icon' qualification={7} /></div>
                    
                </div>
            </div>
        </div>
    )
}