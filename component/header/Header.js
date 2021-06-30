import React from 'react'

export const Header = () => {
    return (
        <header className='header'>
            <div className="mi__data">
                <p className='hola'>Hola!!</p>
                <h1 className='title'>Soy Cristian Silvera</h1>
                <p className='sub__title'>Front End Developer</p>
                <div className="enlaces">
                    <a href="" className='boton'>Ver Proyectos</a>
                    <a href="" className='boton'>Contactame</a>
                </div>
            </div>
            <div className="img">
                <img className='mi__foto' src="pp.jpg" alt="" width={300} />
                <div className="contactame">

                    <a href="">
                        <img src="linkedin.svg" alt="" width={40} />
                    </a>
                    <a href="">
                        <img src="signo-de-github.svg" alt="ola" width={40} />
                    </a>

                </div>
            </div>
        </header>
    )
}
