const { Schema, model } = require('mongoose');

const EstudiantesSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Estudiantes', EstudiantesSchema);
