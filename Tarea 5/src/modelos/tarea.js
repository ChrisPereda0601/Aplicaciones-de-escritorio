const { Schema, model } = require('mongoose');

const tareaSchema = new Schema({    //Constructor
    titulo: {type: String},
    fecha: {type: String},
    descripcion: {type: String},
    status: {type: String, default: 'new'}
});

module.exports = model('tarea', tareaSchema);    //Hace la conversion a plural automaticamente 'tareas'