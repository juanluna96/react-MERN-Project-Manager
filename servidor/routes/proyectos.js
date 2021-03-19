const router = require('express').Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    auth, [
        check('nombre', 'El nombre de la tarea es obligatorio').not().isEmpty(),
        check('proyecto', 'Seleccionar un proyecto es obligatorio').not().isEmpty(),
    ],
    proyectoController.crearProyecto);

router.get('/', auth, proyectoController.obtenerProyecto);


module.exports = router;