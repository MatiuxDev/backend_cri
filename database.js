const mongoose = require('mongoose');

const URI = 'mongodb+srv://devslippery:devslippery123@cluster0.bqrff.mongodb.net/angular-js-test?retryWrites=true&w=majority';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .catch((error) => console.log(error));
mongoose.connection.on('open', () => {
  console.log('DB is connected');
});
