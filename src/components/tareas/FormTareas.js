import React from 'react'

const FormTareas = () => {
    return (
        <div className="formulario">
            <form action="">
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
