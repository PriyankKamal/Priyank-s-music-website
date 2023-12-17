"use client"
import React from 'react'
import Script from 'next/script'

const Firstpagenew = () => {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
{/* <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet"></link> */}
{/* <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ephesis&display=swap" rel="stylesheet"></link> */}
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ephesis&family=Montserrat:wght@200&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Kalnia&display=swap" rel="stylesheet"></link>
{/* <Script src="../Script/firstpagescript.js" strategy='lazyOnload'></Script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js" integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script> */}
    <div className="new-first-page-container">
    <video className='nav-video' loop autoPlay muted src="../Videos/bgvidn4.mp4" strategy='beforeInteractive'></video>
        <div className="new-first-page-container-inside">
          {/* <img className='music-img-2' src="https://www.tarakeswardegreecollege.org/images/departments/msic.jpg" alt="" srcset="" /> */}
          <img className='music-img-2' style={{mixBlendMode:"difference"}} src='https://w0.peakpx.com/wallpaper/355/713/HD-wallpaper-moon-ball-dark-happy-headphones-music-white.jpg' alt="" srcset="" />
          <div className="enjoy">
            {/* <img className='img-new-first-page 'id='hexagon' src="https://img.freepik.com/premium-photo/music-mind-music-abstract-art-created-with-generative-ai-technology_545448-15311.jpg" alt="" srcset="" /> */}
            <h1 className='h1-enjoy'>Enjoy</h1>
            {/* <img className='first-page-new-img3 fill-img' style={{mixBlendMode:"difference"}}  src="https://www.clipartmax.com/png/small/69-697259_red-musical-note-icon-music-note-icon-red.png" alt="" /> */}
            {/* <img className='first-page-new-img3-a' width={200} height={200} style={{position:"absolute"}} src="https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg" alt="" /> */}
            {/* <img className='first-page-new-img3-b' src="https://clipart-library.com/images_k/white-music-note-transparent-background/white-music-note-transparent-background-20.png" alt="" /> */}
            {/* <h1 className='e'>E</h1><span>n</span><span>j</span><span>o</span><span>y</span> */}
          </div>
          <div className="music">
          {/* <img className='img-new-first-page2 'id='hexagon' src="https://img.freepik.com/premium-photo/music-mind-music-abstract-art-created-with-generative-ai-technology_545448-15311.jpg" alt="" srcset="" /> */}
            <h1 className='h1-music'>music</h1>
            {/* <span>m</span><span>u</span><span>s</span><span>i</span><span>c</span> */}
          </div>
        </div>
    </div>


    <Script src="../Script/firstpagescript.js" ></Script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js" integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>

    </>
  )
}

export default Firstpagenew