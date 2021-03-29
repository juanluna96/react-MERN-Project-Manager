const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const multer = require('multer');
const upload = multer({ dest: './src/img/archivos_tareas' });

// Crear una tarea
// api/tareas

router.post('/',
    auth, [
    check('nombre', 'El nombre es obligatorio').not().isEmpty()
], tareaController.crearTarea);

// Obtener tareas por proyecto
router.get('/', auth, tareaController.obtenerTareas);

// Actualizar tareas
router.put('/:id', auth, tareaController.actualizarTarea);

// Eliminar tarea
router.delete('/:id', auth, tareaController.eliminarTarea);

// Subir archivos tareas
router.post('/archivos', upload.single('files'), tareaController.subirArchivo)

// Subir archivos tareas
router.delete('/delete_file/:path', tareaController.borrarArchivo);

// Descargar archivo del servidor
router.get('/download_file', tareaController.descargarArchivo)

module.exports = router
