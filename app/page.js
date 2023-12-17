import React from 'react'
import Nav from '@/Components/Nav'
import Slide from '@/Components/Slide'
// import { EffectCoverflow } from 'swiper/modules'
import EffectCoverflow from '@/Components/EffectCoverflow'
import SearchSong from '@/Components/SearchSong'
import CreatingLogin from '@/Components/CreatingLogin'
// import firstpagenew from '@/Components/firstpagenew'
import Firstpagenew from '@/Components/firstpagenew'
// const reesponse = await fetch("http://localhost:4000/")
// const data = await reesponse.json()
// console.log(data)

const page = () => {
  return (
    <>
      {/* <Nav/> */}
      <Firstpagenew/>
      {/* <Slide /> */}
      
      {/* <CreatingLogin/> */}
      {/* <SearchSong/> */}
      {/* <EffectCoverflow/> */}
    </>
  )
}

export default page
