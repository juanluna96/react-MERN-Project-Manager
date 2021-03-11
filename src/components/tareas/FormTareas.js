import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTareas = () => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return null;
    }
    const [proyectoActual] = proyecto;

    const onSubmit = (e) => {
        e.preventDefault();

        // Validar

        // Pasar la validación

        // Agregar la nueva tarea al state de tareas

        // Reiniciar el form
    }

    return (
        <div className="formulario" onSubmit={ onSubmit }>
            <button type="submit" className="btn btn-eliminar" onClick={ () => eliminarProyecto(proyectoActual) }>Eliminar proyecto &times;</button>
            <form>
                <div className="contenedor-input">
                    <input type="text" name="nombre" className="input-text" placeholder="Nombre de la tarea..." />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar tarea" />
                </div>
            </form>
        </div>
    )
}

export default FormTareas
