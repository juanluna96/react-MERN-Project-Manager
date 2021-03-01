import React from 'react'

const Tarea = ({ tarea }) => {
    return (
        <li className="tarea">Nombre: {tarea.nombre } Estado: {tarea.estado ? 'Activa' : 'Inactiva' }</li>
    )
}

export default Tarea
