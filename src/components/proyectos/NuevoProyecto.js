import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario } = proyectosContext;

    // State para proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    // Lee los contenidos del input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    };

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        // Validar el proyecto

        // Agregar al state

        // Reiniciar el form
    }


    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">Nuevo proyecto</button>

            { formulario === true
                ? (<form className="formulario-nuevo-proyecto" onSubmit={ onSubmitProyecto }>
                    <input type="text" className="input-text" placeholder="Nombre del nuevo proyecto" name="nombre" onChange={ onChangeProyecto } value={ nombre } />
                    <input type="submit" value="Agregar proyecto" className="btn btn-primario btn-block" />
                </form>)
                : null
            }
        </Fragment>
    )
}

export default NuevoProyecto
