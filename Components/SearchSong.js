'use client'
import React, { useState } from 'react'
import DynamicSong from './DynamicSong'
import Songs from '@/app/Songs/page'

const SearchSong = (parames) => {
  console.log("heloo search song")
  console.log(parames)
  const [query, setQuery] = useState("ht")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(query)
    // setQuery("")
    
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" id='searching' placeholder='searching' className='search-input' value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} />
        {/* <Songs /> */}
      </form>
      {/* <DynamicSong searchQuery = {query}/> */}
      {/* <Songs query = {query}/> */}
    </>
  )
}

export default SearchSong
