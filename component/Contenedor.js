import React from 'react'
import Footer from './footer/Footer'
import { Header } from './header/Header'
import { Proyectos } from './proyectos/Proyectos'
import { SobreMi } from './sobremi/SobreMi'

export const Contenedor = () => {
    return (
        <div className='contenedor'>
            
            <Header />
            <Proyectos />
            <SobreMi />
            <Footer />
        </div>
    )
}
