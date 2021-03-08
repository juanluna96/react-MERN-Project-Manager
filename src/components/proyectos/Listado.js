import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Listado = () => {

    // Obtener el proyecto del state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyecto cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si proyecto tiene contenido
    if (proyectos.length === 0) {
        return <p>No hay proyectos comienza creando uno</p>
    }

    return (
        <ul className="listado-proyectos">
            {proyectos.map((proyecto) => (
                <Proyecto key={ proyecto.id } proyecto={ proyecto }></Proyecto>
            )) }
        </ul>
    )
}

export default Listado
