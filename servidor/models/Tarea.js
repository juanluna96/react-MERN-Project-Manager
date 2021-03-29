const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    archivo: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado: {
        type: Date,
        default: Date.now
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
});

module.exports = mongoose.model("Tarea", tareaSchema);