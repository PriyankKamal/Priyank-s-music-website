"use client"
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import Script from 'next/script'
import SearchSong from '@/Components/SearchSong'
import { resolve } from 'styled-jsx/css'
import gsap from 'gsap'



const Songs = async (params) => {
    

        const reesponse = await axios.get(`http://localhost:3000/fetching`)
        let data = await reesponse.data
       
    function backgroundBoxCon(poster){
        const boxCon = document.getElementById("box-con-id")
        let findImg = poster.split(" ").join(" ")
        
        let newdiv = document.createElement('div');
        newdiv.classList.add("dynamicImaheHovering");
    
        let newImg = new Image()
        newImg.src = `Images/${poster}`
        // newImg.style.transition="all-ease 1"
        // newImg.style.scale="0.5"

        newImg.classList.add("newImg-hovering");
        newdiv.append(newImg)
        console.log(newdiv);
        newImg.onload = function(){
            newdiv.style.backgroundImage = `url(Images/${findImg})`;
            // newdiv.style.backgroundColor="rgba(0, 0, 255, 0.355);"
        }

        boxCon.append(newdiv)
    }


    function backgroundBoxConLeave(){
        const boxCon = document.getElementById("box-con-id")
        // let findImg = poster.split(" ").join(" ")
        
        let newdiv = document.createElement('div');
        newdiv.classList.add("dynamicImaheHovering");
    
        let newImg = new Image()
        // newImg.src = `Images/${poster}`
        // newImg.style.transition="all-ease 1"
        // newImg.style.scale="0.5"

        newImg.classList.add("newImg-hovering");
        newdiv.append(newImg)
        console.log(newdiv);
        newImg.onload = function(){
            newdiv.style.backgroundColor = "black";
            // newdiv.style.backgroundColor="rgba(0, 0, 255, 0.355);"
        }

        boxCon.append(newdiv)
    }

    // function rotateBox(elem){
    //     console.log(elem);
    //     gsap.to(`Videos.${elem} `,{
    //         rotation:10,
    //         yoyo:true,
    //         repeat:-1,
    //         duration:1,
    //         ease:"linear"
    //     })
    // }


    return (
        <>
        
        {/* <SearchSong  data={...data} /> */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js" />
<link rel="stylesheet" href="https://unpkg.com/tilt.js@1.2.1/dest/tilt.jquery.min.js" /> */}
            <div className="box-con"id='box-con-id'>
                
                <div className="boxes" >
                    
                    {
                        data.map((e, id) => {
                          
                            return <a key={id} href={`Songs/${id}`} >
                                <div className="box " data-tilt key={id}   >
                                
                                   
                                    <video key={id}   onMouseEnter={()=>{
                                        backgroundBoxCon(e.poster)
                                    }} onMouseOut={backgroundBoxConLeave} className='box-vid-move' poster={`Images/${e.poster}`} src={`Videos/${e.url} `} style={{ objectFit: 'fill', width: '100%' }}></video>
                                   
                                </div>
                                
                            </a>
                            // </div>
                        })
                    }
                </div>
            </div>
            {/* <Script src="../Script/firstpagescript.js" strategy='lazyOnload'></Script> */}
            <Script src="../Script/firstpagescript.js" strategy='afterInteractive'></Script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js" integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>
    {/* <script src="jquery.js" ></script> 
    <script src="tilt.js"></script>  */}
    
        </>
    )
}

export default Songs
