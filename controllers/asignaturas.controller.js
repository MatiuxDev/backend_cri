const { Asignaturas } = require('../models/index');

exports.getAsignaturas = async (req, res) => {
  try {
    const asignaturas = await Asignaturas.find();
    return res.json(asignaturas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al obtener las asignaturas',
      data: {},
    });
  }
};

exports.getAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.findById(req.params.id);
    return res.json(asignatura);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al obtener la asignatura',
      data: {},
    });
  }
};

exports.createAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.create(req.body);
    return res.json(asignatura);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al crear la asignatura',
      data: {},
    });
  }
};

exports.updateAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(asignatura);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al actualizar la asignatura',
      data: {},
    });
  }
};

exports.deleteAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignaturas.findOneAndDelete(req.params.id);
    return res.json(asignatura);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al eliminar la asignatura',
      data: {},
    });
  }
};
