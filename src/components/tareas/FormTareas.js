import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTareas = () => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Extraer funcion para agregar tarea
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: '',
        estado: false
    });

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return null;
    }

    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    // Extraer el nombre del proyecto
    const { nombre } = tarea;


    const onSubmit = (e) => {
        e.preventDefault();

        // Validar

        // Pasar la validación

        // Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        agregarTarea(tarea);

        // Reiniciar el form
    }

    return (
        <div className="formulario">
            <button type="submit" className="btn btn-eliminar" onClick={ () => eliminarProyecto(proyectoActual) }>Eliminar proyecto &times;</button>
            <form onSubmit={ onSubmit }>
                <div className="contenedor-input">
                    <input type="text" name="nombre" value={ nombre } onChange={ handleChange } className="input-text" placeholder="Nombre de la tarea..." />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar tarea" />
                </div>
            </form>
        </div>
    )
}

export default FormTareas
