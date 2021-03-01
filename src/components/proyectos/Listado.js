import React from 'react'
import Proyecto from './Proyecto';

const Listado = () => {

    const proyectos = [
        { nombre: 'Tienda vitual' },
        { nombre: 'Intranet' },
        { nombre: 'Diseño de sistema' },
    ];
    return (
        <ul className="listado-proyectos">
            {proyectos.map((proyecto) => (
                <Proyecto proyecto={ proyecto }></Proyecto>
            )) }
        </ul>
    )
}

export default Listado
