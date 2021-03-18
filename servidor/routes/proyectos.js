const router = require('express').Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');


// Crea proyectos
// api/proyectos
router.post('/',
    auth,
    proyectoController.crearProyecto);

module.exports = router;