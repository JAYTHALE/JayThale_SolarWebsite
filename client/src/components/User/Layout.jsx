import React from 'react'
import Navbar from './Navbar'
import Footer from '../../Pages/Footer'
import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
=======
import HeroBackground from '../../Pages/HeroBackground'
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

const Layout = () => {
    return <>
        <Navbar />
<<<<<<< HEAD
        {/* <HeroBackground /> */}
=======
        <HeroBackground />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        <main className="pt-[92px]">
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout