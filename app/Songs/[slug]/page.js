import React from 'react'
import DynamicSong from '@/Components/DynamicSong'
import axios from 'axios'
import DynamicSongAside from '@/Components/DynamicSongAside'
import Link from 'next/link' 
import SearchSong from '@/Components/SearchSong'
import Script from 'next/script'
// import Shery from "sheryjs";

const Songslug = async({params}) => {
  
  console.log(params)
  const id = params.slug

  const response = await axios.get("http://localhost:3000/fetching")
  const data = await response.data
  console.log(data)
  // console.log(data[id]) 
  // await new Promise(resolve=>setTimeout(resolve,2000))

  return (
    <>
      {/* <h1 >i am dynamic song page</h1> */}
      <DynamicSong url={data[id].url} poster={data[id].poster} data={...data}/>
      {/* <SearchSong url = {data[id].url} poster = {data[id].poster} data={...data} /> */}
      <Script src="../Script/firstpagescript.js" strategy='lazyOnload'></Script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js" integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>
    </>
  )
}

export default Songslug
