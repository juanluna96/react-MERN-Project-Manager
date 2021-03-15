const Usuario = require('../models/Usuario')

exports.crearUsuario = async(req, res) => {
    try {
        let usuario;

        // Crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Guardar usuario
        await usuario.save();

        // Mensaje de confirmacion
        res.send('Usuario creado correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un errror');
    }
}