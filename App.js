const express = require('express');
const { usersRoutes } = require('./routes/UsersRoutes');
const { repairsRoutes } = require('./routes/RepairsRoutes');
const { dataBase } = require('./utils/DataBase');
const App = express();

App.use(express.json());

App.use('/api/v1/users', usersRoutes);
App.use('/api/v1/repairs', repairsRoutes);

//--------------------------------------------------------------------------//
dataBase
    .authenticate()
    .then(console.log('La base de datos se conecto correctamente'))
    .catch((error) => console.log(error));

dataBase
    .sync()
    .then(console.log('se creo correctamente las tablas '))
    .catch((error) => console.log(error));
//--------------------------------------------------------------------------//

const PORT = 6000;
App.listen(PORT, () => {
    console.log('El servidor inicio correctamente');
});
