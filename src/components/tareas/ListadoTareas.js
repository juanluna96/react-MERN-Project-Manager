import React, { Fragment, useState } from 'react'
import Tarea from './Tarea';

const ListadoTareas = () => {

    const [tareas, setTareas] = useState([
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pago', estado: false },
        { nombre: 'Elegir hosting', estado: true },
    ]);

    return (
        <Fragment>

            <h2>Proyecto: Tienda virtual</h2>

            <ul className="listado-tareas">
                {
                    tareas.length === 0
                        ? (<li className="tarea">No hay tareas</li>)
                        :
                        tareas.map((tarea) => {
                            return (
                                <Tarea tarea={ tarea }></Tarea>
                            )
                        })
                }
            </ul>
        </Fragment>
    )
}

export default ListadoTareas
