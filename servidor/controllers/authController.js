const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
}