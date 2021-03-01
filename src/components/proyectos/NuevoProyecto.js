import React, { Fragment } from 'react'

const NuevoProyecto = () => {
    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">Nuevo proyecto</button>

            <form className="formulario-nuevo-proyecto">
                <input type="text" className="input-text" placeholder="Nombre del nuevo proyecto" name="nombre" />
                <input type="submit" value="Agregar proyecto" className="btn btn-primario btn-block" />
            </form>
        </Fragment>
    )
}

export default NuevoProyecto
