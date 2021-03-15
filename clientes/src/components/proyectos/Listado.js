import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Listado = () => {

    // Obtener el proyecto del state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyecto cuando carga el componente
    useEffect(() => {
        obtenerProyectos();

        // eslint-disable-next-line
    }, []);

    // Revisar si proyecto tiene contenido
    if (proyectos.length === 0) {
        return <p>No hay proyectos comienza creando uno</p>
    }

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                { proyectos.map((proyecto) => (
                    <CSSTransition key={ proyecto.id } timeout={ 200 } className="proyecto">
                        <Proyecto proyecto={ proyecto }></Proyecto>
                    </CSSTransition>
                )) }
            </TransitionGroup>
        </ul>
    )
}

export default Listado
