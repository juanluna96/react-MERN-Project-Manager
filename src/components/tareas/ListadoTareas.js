import React, { Fragment, useState, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
    // Obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    const [tareas, setTareas] = useState([
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pago', estado: false },
        { nombre: 'Elegir hosting', estado: true },
    ]);

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return <h2>Selecciona un proyecto</h2>
    }

    const [proyectoActual] = proyecto;


    return (
        <Fragment>

            <h2>Proyecto: { proyectoActual.nombre }</h2>

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
