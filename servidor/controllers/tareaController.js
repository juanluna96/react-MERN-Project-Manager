const Tarea = require('../models/Tarea')
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

// Crea una nueva tarea

exports.crearTarea = async(req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // Extraer el proyecto y comprobar si existe
    const { proyecto } = req.body;

    try {
        const existeProyecto = await Proyecto.findById(proyecto);
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        // Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtiene las tareas por proyecto

exports.obtenerTareas = async(req, res) => {

    // Extraer el proyecto y comprobar si existe
    const { proyecto } = req.body;

    try {
        const existeProyecto = await Proyecto.findById(proyecto);
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        // Obtener las tareas por proyectos
        const tareas = await Tarea.find({ proyecto });

        res.json({ tareas });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualizar tarea por ID

exports.actualizarTarea = async(req, res) => {
    // Extraer el proyecto y comprobar si existe
    const { proyecto, nombre, estado } = req.body;

    try {

        // Si la tarea existe
        const tareaExiste = await Tarea.findById(req.params.id);

        if (!tareaExiste) {
            return res.status(404).json({ msg: 'No existe la tarea' })
        }

        // Extraer el proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        // Revisar si el proyecto actual pertenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        // Crear un objeto con la nueva información

        const nuevaTarea = {}

        if (nombre) {
            nuevaTarea.nombre = nombre
        }

        if (estado) {
            nuevaTarea.estado = estado
        }

        // Guardar la tarea
        tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, nuevaTarea, { new: true })

        res.json({ tarea });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al editar la tarea');
    }
}

// Eliminar una tarea por ID

exports.eliminarTarea = async(req, res) => {
    // Extraer el proyecto y comprobar si existe
    const { proyecto, nombre, estado } = req.body;

    try {

        // Si la tarea existe
        const tareaExiste = await Tarea.findById(req.params.id);

        if (!tareaExiste) {
            return res.status(404).json({ msg: 'No existe la tarea' })
        }

        // Extraer el proyecto
        const existeProyecto = await Proyecto.findById(proyecto);

        // Revisar si el proyecto actual pertenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' })
        }

        // Elimina la tarea
        await Tarea.findOneAndRemove({ _id: req.params.id })

        res.json({ msg: 'Tarea eliminada' });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al editar la tarea');
    }
}