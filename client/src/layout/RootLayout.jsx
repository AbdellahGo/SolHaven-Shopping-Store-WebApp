import React from 'react'
import { Features, Footer, NavBar } from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <main >
                <Outlet />
            </main>
            <Features/>
            <Footer />
        </div>
    )
}

export default RootLayout