import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

type Props = {}

const View = (props: Props) => {
  return (
    <div className='bg-black'>
        <Header/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default View