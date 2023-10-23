const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    descripcion:{
    type: DataTypes.STRING,
    allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad:{
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaDeNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {timestamp: false});
};