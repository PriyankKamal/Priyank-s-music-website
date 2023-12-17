'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import SearchSong from './SearchSong'
// import Slide from './Slide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
// import gsap from 'gsap'

// const timeline = gsap.timeline()

// gsap.from(".navImg",{
//   y:-100,
//   opacity:0,
//   delay:1,
//   duration:1,
// })
// gsap.from(".navImg",{
//   y:-100,
//   opacity:0,
//   delay:1,
//   duration:1,
// })
// gsap.from(".navImg",{
//   y:-100,
//   opacity:0,
//   delay:1,
//   duration:1,
// })



const Nav = () => {
  return (
    <><link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ephesis&family=Hedvig+Letters+Sans&family=Montserrat:wght@200&display=swap" rel="stylesheet"></link>
   {/* <Script src="../Script/firstpagescript.js" strategy='lazyOnload'></Script> */}
      <div className="nav-container">
        <div className="nav-inside">
          {/* <Image className='navImg' src='/Images/navimg.jpg' alt='not found'  width={200} height={200} /> */}
          {/* <Image className='navImg' src='https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='not found'  width={200} height={200} /> */}
          {/* <Image className='navImg' src='../Images/imgfirstpage1.png' alt='not found'  width={200} height={200} /> */}
          <img className='navImg' draggable="true"  src="../Images/imgfirstpage1.png" alt="" />
          <div className="navLink">
            <a href='/' className='navlinksize home'>Home</a>
            <a href='/Songs' className='navlinksize songs' >Songs</a>
            {/* <input type="text" placeholder="Search.."/> */}
            <FontAwesomeIcon className='barsNav' icon={faBarsStaggered} />

          </div>
        </div>
        {/* <div className="nav-inside-second">
        <input type="text" className='search-input' placeholder="Search.."/>
        <SearchSong/>
        </div> */}
      </div>
      {/* <Slide /> */}
      <Script src="../Script/firstpagescript.js" ></Script>
    </>
  )
}

export default Nav
