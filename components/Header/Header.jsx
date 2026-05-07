import React from 'react'
import Cart from '../Cart/Cart'
import './header.css'
import NavBar from '../NavBar/NavBar'


function Header() {
    return (
        <>
            <title className='tituloNavegador'>Khaos Street Wear</title>

            <div className="navBarHeader">
                <div className="logo">
                    <img src="../images/logo.png" alt="Logo" />
                </div>

                <Cart />

            </div>
                <NavBar />

            <div className="header">
                <img src="#" alt="" />
                <h1 className='h1Title'>KHAOS</h1>
                <h2 className='h2Title'>Moda StreetWear</h2>
            </div>

        </>
    )
}

export default Header 