import React, { Fragment } from 'react'

const Tarea = ({ tarea }) => {
    return (
        <Fragment>
            <li className="tarea sombra">{ tarea.nombre }
                <div className="estado">
                    {
                        tarea.estado
                            ? (<button className="completo" type="button">Completo</button>)
                            : (<button className="incompleto" type="button">Incompleto</button>)
                    }
                </div>
                <div className="acciones">
                    <button className="btn btn-primario" type="button">Editar</button>
                    <button className="btn btn-secundario" type="button">Eliminar</button>
                </div>
            </li>

        </Fragment>
    )
}

export default Tarea
