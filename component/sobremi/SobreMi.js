import React from 'react'
import { svg } from '../../helpers'

export const SobreMi = () => {

    
    return (
        <div className='sobre__mi'>
            <h2 className='title__sobremi'>Sobre Mi</h2>
            <div className="contenedor__sobremi">
                <div className="datos">
                    <p>Mi nombre es Cristian Silvera Taype</p>
                    <p>Soy Front End Developer y Autodidcta</p>
                    <p>Tengo mas de 3 años aprendiendo cosas por mi cuenta, y participando en comunidades y proyectos digitales</p>

                    <p>Me gusta ser hacer paginas web e agregarle interactividad  </p>

                    <p>Me pasan el diseño ya sea en photoshop, figma o cualquier diseño te lo programo y hago realidade tu diseño en la web </p>

                    <p>Me encanta aprender, innovar, codear y viajar, caminar, leer. Vivo en Lima, Peru.</p>
                </div>
                <div className="herramientas">
                    
                    <p>¿Porque Contratarme?</p>
                    <p>Porque soy una persona dispuesta aprender nuevas cosas, seguir investigando y crecer cada dia</p>
                    <div className="contenido__herramientas">
                        <h3>Herramientas</h3>
                        {svg.map(({imagen}) => (
                            <img src={imagen} alt=""  width={30} />
                        ))}
                    </div>
                    <p>Puedes encontrar mas acerca de mi trabajo</p>
                    <div className="trabajo">
                        <img src="linkedin.svg" width={30} alt="" />
                        <img src='signo-de-github.svg' width={30} alt="" />
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}
