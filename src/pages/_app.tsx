import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Navbar from '@/Components/Navbar/Navbar'
import GlobalStyle from '../styles/globals.module.scss'

export default function App({ Component, pageProps }: AppProps) {
    const kirby = 'https://i.pinimg.com/originals/b6/e9/55/b6e95526effec42d33edb446ab6d0b07.gif';
    const pikaSurf = 'https://openseauserdata.com/files/207380650fb63a70abbbe5d741009dd5.gif';
    const mario = 'https://64.media.tumblr.com/tumblr_lz5r80oG3A1r3smugo1_540.gif';
    const pikachu2 = 'https://i.pinimg.com/originals/ec/81/db/ec81db6415906488ff268b3a0855ba17.gif';
    const yoshi = 'https://media.tenor.com/O1S0Gq6i5EMAAAAd/yoshi-island.gif';

    useEffect(() => {
        changeBackground()
    })

    const changeBackground = () => {
        const gifs = [kirby, pikaSurf, mario, pikachu2, yoshi];
        const background = document.getElementById('body');
        background.style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')'; 
    }

  return (
  <>
    <Navbar/>
    <div className={GlobalStyle.body} id='body'>
      <div className={GlobalStyle.home}>
        <Component {...pageProps} />
      </div>
    </div>
  </>
  )
  
}
