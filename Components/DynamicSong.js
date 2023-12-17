'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faExpand, faPlay, faForwardStep, faVolumeHigh, faPause,faVolumeXmark,faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import Shery from 'sheryjs'
import dynamic from 'next/dynamic';
import { metadata } from '@/app/layout';

const DynamicSong = (params) => {
  console.log(params.url)
  // console.log(params.data)
  const maindata = params.data

  // const fullScreen = document.querySelector('.full-screen')
  // const i=0;
  const [nextvideo, setnextvideo] = useState(1);
  const [i, seti] = useState(Math.floor(Math.random()*10));
  // setnextvideo(seti+1)

  function nextVideo(){
    const anchorTag = document.createElement("a")
    seti(seti+1)
    // anchorTag.href = `http://localhost:3001/Songs/${seti}`
  }
  
  return (
    <>
    {/* <Script src="../Script/videoControl.js" strategy='lazyOnload'></Script> */}
      <div className="dynamicbox">
        <div className="dnmc1">
          <div className="video-control-bottom">
            <div className="progress">
              <div className='width-video'></div>
              <input type="range" id="range"  min="0" step="0.1" />
              {/* <input type="range" id="range"  min="0" step="0.1" /> */}
            </div>
            {/* <div className="progress">
              <input type="range" id="range"  min="0" step="0.1" />
            </div> */}
            <div className="inside-video-bottom">
              <div className='left70'>
                <button className='btn'>
                  <FontAwesomeIcon className='video-contron-width backward' icon={faBackwardStep} />
                </button>

                <button className='btn play-btn'>
                  <FontAwesomeIcon className='video-contron-width play' icon={faPlay} />
                </button>

                <button className='btn pausing-button'>
                <FontAwesomeIcon className='video-contron-width pause' icon={faPause} />
                  </button>
                <button className='btn'>
                 <a href={`http://localhost:3001/Songs/${i}`}  ><FontAwesomeIcon className='video-contron-width forward' icon={faForwardStep} />
                  </a> 
                </button>
                <span className='volspan'>
                  <button className='btn unmute'>
                    <FontAwesomeIcon icon={faVolumeHigh} className='video-contron-width volume' />
                  </button>
                  <button className='btn mute-btn'>
                  <FontAwesomeIcon icon={faVolumeXmark} className='video-contron-width volume mute' /> 
                  </button>
                  <button className='btn low-btn'>
                  <FontAwesomeIcon icon={faVolumeLow} className='video-contron-width volume low-vol'/>
                  </button>
                  <div className="vol-range-changer-container">

                  <div className="vol-range-changer"></div>
                  <input type="range" id="vol-range" min={0} max={1} step={0.1}   />
                  </div>
                </span>

                <div className="duration-container">
                  <p className='current-time'>0:00</p>
                  /
                  <p className='total-time'></p>
                </div>
              </div>
              <div className='right30'>

                <button className='btn fullBtns'>
                  <FontAwesomeIcon className='video-contron-width full-screen' icon={faExpand} />
                </button>
              </div>

            </div>

          </div>
          <video poster={`../Images/${params.poster}`} src={`../Videos/${params.url}`} style={{borderRadius:"5px"}}></video>
        </div>
        <div className="dnmc2">
          <div className="dnmc2Container">
            {
              maindata.map((e) => {
                return <a href={`/Songs/${e.id}`}> <div className="dnmc2Video" key={e.id}>
                  <video className='dnmc2-vid' poster={`../Images/${e.poster}`} src={`../Videos/${e.url}`}></video>
                </div> </a>
              })
            }
            

          </div>
        </div>
      </div >
      <Script src="../Script/videoControl.js" strategy='lazyOnload' ></Script>
      <Script src="../Script/firstpagescript.js" strategy='lazyOnload'></Script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js" integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>
    </>
  )
}

export default DynamicSong
