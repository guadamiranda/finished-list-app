import React, { useEffect } from 'react';
import Head from 'next/head'
import Navbar from '../pages/Navbar/Navbar'
import GlobalStyle from '../styles/globals.module.scss'
import Home from './Home/Home';

export default function Home() {
  const kirby = 'https://i.pinimg.com/originals/b6/e9/55/b6e95526effec42d33edb446ab6d0b07.gif'
  const pikaSurf = 'https://openseauserdata.com/files/207380650fb63a70abbbe5d741009dd5.gif'
  const mario = 'https://i.pinimg.com/originals/2a/98/c3/2a98c3d4774f23678760256d0901ded9.gif'
  const invaders = 'https://community.esri.com/t5/image/serverpage/image-id/4885i467C0BE0C2DA2708/image-size/large/is-moderation-mode/true?v=v2&px=999'
  const zelda = 'https://media.tenor.com/JXdxjNigjL8AAAAC/nes-zelda.gif'
  const pikachu2 = 'https://i.pinimg.com/originals/ec/81/db/ec81db6415906488ff268b3a0855ba17.gif'
  const yoshi = 'https://media.tenor.com/O1S0Gq6i5EMAAAAd/yoshi-island.gif'
  const undertale= 'https://thumbs.gfycat.com/AdvancedFeminineDartfrog-size_restricted.gif'

  useEffect(() => {
    changeBackground()
  })

  const changeBackground:any = () => {
    const gifs = [kirby, pikaSurf, mario, invaders, zelda, pikachu2, yoshi, undertale];
    const background = document.getElementById('body');
    background.style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')'; 
  }

  return (
    <>
      <Head>
        <title>Finished List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/8bit-wonder" rel="stylesheet"></link>
      </Head>
      <div className={GlobalStyle.body} id='body'>
        <Navbar/>
        <div className={GlobalStyle.home}>
          <Home/>
        </div>
      </div>
    </>
  )
}
