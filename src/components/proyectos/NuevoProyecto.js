import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {
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

            <form className="formulario-nuevo-proyecto" onSubmit={ onSubmitProyecto }>
                <input type="text" className="input-text" placeholder="Nombre del nuevo proyecto" name="nombre" onChange={ onChangeProyecto } value={ nombre } />
                <input type="submit" value="Agregar proyecto" className="btn btn-primario btn-block" />
            </form>
        </Fragment>
    )
}

export default NuevoProyecto
