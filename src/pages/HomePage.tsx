import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import TopComic from '../components/TopComic'
import ComicList from '../components/ComicList'
import Footer from '../components/Footer'
import GoodComic from '../components/GoodComic'

const HomePage = () => {
  return (
    <div className="bg-black">
        
        <TopComic/>
        <GoodComic/>
        <ComicList/>
          
    </div>
  )
}

export default HomePage