const { Sequelize, DataTypes, Model } = require('sequelize');

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

// Criar tabela de usuarios caso não exista uma
const usuario = sequelize.define('usuarios',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
            type:DataTypes.STRING,
            allowNull:false
    }
})
usuario.sync();
module.exports  = usuario;