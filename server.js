const app = require('./app');
const mongoose = require('mongoose');

const port = 8080;

mongoose.connect('mongodb://localhost:27017/', { dbName: 'ada'}, 
err => (err ? console.log(err) : console.log('Conectado a la base de datos')))


app.listen(port, () => {
  console.log(`App esta corriendo en el puerto ${port}`);
});
