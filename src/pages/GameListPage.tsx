import React from 'react';
import gameListStyle from '../styles/gameListPage.module.scss';
import Title from '@/Components/Title/Title';
import Options from '../Components/Options/Options'
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
                <div className={gameListStyle.body__list}> </div>
            </div>
        </div>
    )
}