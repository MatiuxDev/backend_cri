const { Router } = require('express');
const router = Router();
const {
  getEstudiantes,
  getEstudiante,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
} = require('../controllers/estudiantes.controller');

router.route('/').get(getEstudiantes).post(createEstudiante);
router
  .route('/:id')
  .get(getEstudiante)
  .put(updateEstudiante)
  .delete(deleteEstudiante);

module.exports = router;
