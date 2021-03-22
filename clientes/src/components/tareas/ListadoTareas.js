import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {
    // Obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener el state de las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

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
                    tareasproyecto.length === 0
                        ? (<li className="tarea">No hay tareas</li>)
                        : <TransitionGroup>
                            {
                                tareasproyecto.map((tarea) => {
                                    return (
                                        <CSSTransition key={ tarea._id } timeout={ 150 } className="tarea">
                                            <Tarea tarea={ tarea }></Tarea>
                                        </CSSTransition>
                                    )
                                })
                            }
                        </TransitionGroup>

                }
            </ul>
        </Fragment>
    )
}

export default ListadoTareas
