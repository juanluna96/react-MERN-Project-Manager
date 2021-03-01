import React from 'react'
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';
import FormTareas from '../tareas/FormTareas';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <FormTareas></FormTareas>
                    <div className="contenedor-tareas">
                        <ListadoTareas></ListadoTareas>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
