const router = require('express').Router();
const proyectoController = require('../controllers/proyectoController');

// Crea proyectos
// api/proyectos
router.post('/', proyectoController.crearProyecto);

module.exports = router;