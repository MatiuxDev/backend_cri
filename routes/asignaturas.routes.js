const { Router } = require('express');
const router = Router();
const {
  getAsignaturas,
  getAsignatura,
  createAsignatura,
  updateAsignatura,
  deleteAsignatura,
} = require('../controllers/asignaturas.controller');

router.route('/').get(getAsignaturas).post(createAsignatura);
router
  .route('/:id')
  .get(getAsignatura)
  .put(updateAsignatura)
  .delete(deleteAsignatura);

module.exports = router;
