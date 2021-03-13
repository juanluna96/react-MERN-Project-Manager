import React, { Fragment, useContext } from 'react'
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({ tarea }) => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    const [proyectoActual] = proyecto;

    // Extraer las funciones del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    // Función que se ejecuta al eliminar tarea
    const tareaEliminar = (tarea) => {
        eliminarTarea(tarea);

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual);
    }

    return (
        <Fragment>
            <li className="tarea sombra">{ tarea.nombre }
                <div className="d-flex">
                    <div className="estado">
                        {
                            tarea.estado
                                ? (<button className="completo" type="button">Completo</button>)
                                : (<button className="incompleto" type="button">Incompleto</button>)
                        }
                    </div>
                    <div className="acciones">
                        <button className="btn btn-primario" type="button">Editar</button>
                        <button onClick={ () => tareaEliminar(tarea) } className="btn btn-secundario" type="button">Eliminar</button>
                    </div>
                </div>
            </li>

        </Fragment>
    )
}

export default Tarea
