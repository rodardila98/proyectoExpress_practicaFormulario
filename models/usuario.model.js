const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    edad: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;