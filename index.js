const express = require('express');
const cors = require('cors');
require('./database');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/estudiantes', require('./routes/estudiantes.routes'));
app.use('/api/asignaturas', require('./routes/asignaturas.routes'));

app.listen(6000, () => {
  console.log('Server is running on port 6000');
});
