const router = require('express').Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    auth, [
    check('nombre', 'El nombre de la tarea es obligatorio').not().isEmpty(),
],
    proyectoController.crearProyecto);

// Obtener todos los proyectos
router.get('/', auth, proyectoController.obtenerProyecto);

// Actualizar proyecto via ID
router.put('/:id',
    auth, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], proyectoController.actualizarProyecto);

// Obtiene el numero de tareas por proyectos
router.get('/:id',
    auth,
    proyectoController.numTareasxProyecto);

// Eliminar proyecto via ID
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto);

module.exports = router;