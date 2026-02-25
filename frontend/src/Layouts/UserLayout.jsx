import React from 'react'

import Navbar from '../Landing_page/CommonComponents/Navbar'
import Footer from '../Landing_page/CommonComponents/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = ()=>{
    return (
    <>
    <Navbar/>
    <main> <Outlet/> </main>
    <Footer/>
    </>
    )
}

export default UserLayout ;