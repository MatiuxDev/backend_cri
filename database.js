const mongoose = require('mongoose');

const URI = 'mongodb://localhost/test-angular-js';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .catch((error) => console.log(error));
mongoose.connection.on('open', () => {
  console.log('DB is connected');
});
