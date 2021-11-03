const { Schema, model } = require('mongoose');

const AsignaturasSchema = new Schema(
  {
    materia: {
      type: String,
    },
    profesor: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Asignaturas', AsignaturasSchema);
