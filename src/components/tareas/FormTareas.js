import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTareas = () => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) {
        return null;
    }

    return (
        <div className="formulario">

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
