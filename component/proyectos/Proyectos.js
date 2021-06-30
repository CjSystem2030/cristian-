import React, { useState } from 'react'
import { primero } from '../../helpers'
import { Proyecto } from './proyecto/Proyecto'



export const Proyectos = () => { 

    
    
    
    return (
        <div className='proyectos'>
            <h2 className='title__proyectos'>Algunos Proyectos</h2>
            <div className="contenedor__proyectos">
                 {
                     primero.map((primer) => (
                        <div>
                            <Proyecto {...primer}/>
                            
                        </div>
                     ) )
                 }  
                 
            </div>
          <a href="" className=' mas__proyectos'>MAS PROYECTOS</a> 
        </div>
    )
}
