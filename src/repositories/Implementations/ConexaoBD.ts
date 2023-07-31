const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projeto', 'root', '123456', {
    host: 'localhost',
    dialect:'mysql'
  });

module.exports = sequelize;

try {
    sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados', error);
  }