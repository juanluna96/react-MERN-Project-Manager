import React from 'react'
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
