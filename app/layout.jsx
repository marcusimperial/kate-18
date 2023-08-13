"use client";

import './globals.css'
import localFont from 'next/font/local';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const elegante = localFont({ src: './assets/Elegante.woff', variable: '--font-elegante' });
const georgia = localFont({ src: './assets/Georgia.woff', variable: '--font-georgia' });

export default function RootLayout({ children }) {

  const music = useRef(typeof Audio !== "undefined" ? new Audio("./music.mp3") : undefined);
  if (music?.current) music.current.loop = true;

  useEffect(() => {
    AOS.init();
    window.onbeforeunload = () => sessionStorage.clear();
    window.onunload = () => sessionStorage.clear();
    // playMusic();
  }, []);

  const playMusic = () => {
      if (!music.current?.paused) return;
      // if is playing, return
      sessionStorage.setItem('kate-18', 'music-on');
      music.current?.play();
  };

  return (
    <html lang="en">
      <head>
        <title>Eliza Kate @ 18</title>
        <meta name="description" content="Eliza Kate's 18th Birthday Debut" />
      </head>
      <body onClick={playMusic} className={`${elegante.variable} ${georgia.variable} font-sans`}>{children}</body>
    </html>
  )
}
