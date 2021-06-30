import React from 'react'

export const Proyecto = (primer) => {

    const { title, fecha, descripcion, html, css, sass, javascript, react } = primer;
    
    console.log(title);
    return (
        <div className='contenedor__proyecto'>
            <div className="contenido__proyecto">
                <h2 className='title__proyecto'>{ title }</h2>
                <p className='fecha__proyecto'>{ fecha }</p>
                <p className='descripcion'>{ descripcion }</p>
                <div className="tecnologia">
                    {html && <p className='icono'>{html}</p>}
                    {javascript && <p className='icono'>{javascript}</p>}
                    
                    {react && <p className='icono'>{react}</p>}
                </div>
            </div>
            <div className="img__proyecto">
                <img className='imagen' src="gastoSemanal.png" alt="" width={300} />
                <div className="botones__proyecto">
                    <a  href="" className='boton__proyecto'>Ver demo</a>
                    <a href="" className='boton__proyecto'>Ver repositorio</a>
                </div>
            </div>
        </div>
    )
}
