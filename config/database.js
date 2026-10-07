const { Sequelize } = require('sequelize');

// Cambia esto según la BD
const DB_TYPE = process.env.DB_TYPE || 'mysql';

// valores: mysql | mssql
let sequelize;
if (DB_TYPE === 'mysql') {
    sequelize = new Sequelize('demo', 'root', 'admin123*', {
        host: 'localhost',
        dialect: 'mysql'
    });
}
if (DB_TYPE === 'mssql') {
    sequelize = new Sequelize('demo', 'sa', 'admin123*', {
        host: 'localhost',
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: false
            }
        }
    });
}
module.exports = sequelize;
