import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
    // Obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual } = proyectosContext;

    // Obtener la funcion del context tarea
    const tareasContext = useContext(tareaContext)
    const { obtenerTareas } = tareasContext;

    // Función para agregar el proyecto actual

    const seleccionarProyecto = (proyecto) => {
        proyectoActual(proyecto); //Fijar un proyecto actual
        obtenerTareas(proyecto); //Filtrar las tareas cuando se de click
    }

    return (
        <li>
            <button type="button" className="btn btn-blank" onClick={ () => seleccionarProyecto(proyecto) }>{ proyecto.nombre }</button>
        </li>
    )
}

export default Proyecto
