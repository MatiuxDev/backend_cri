const { Estudiantes } = require('../models/index');

exports.getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.find();
    res.status(200).json({
      ok: true,
      estudiantes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al cargar los estudiantes',
      error,
    });
  }
};

exports.getEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiantes.findById(id);
        res.status(200).json({
        ok: true,
        estudiante,
        });
    } catch (error) {
        res.status(500).json({
        ok: false,
        msg: 'Error al cargar el estudiante',
        error,
        });
    }
};

exports.createEstudiante = async (req, res) => {

    console.log(req.body);
  try {
    const estudiante = await Estudiantes.create(req.body);
    res.status(200).json({
      ok: true,
      estudiante,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al crear el estudiante',
      error,
    });
  }
};

exports.updateEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const estudiante = await Estudiantes.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      estudiante,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el estudiante',
      error,
    });
  }
};

exports.deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const estudiante = await Estudiantes.findOneAndDelete({ _id: id });
    res.status(200).json({
      ok: true,
      estudiante,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el estudiante',
      error,
    });
  }
};


