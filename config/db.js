import Sequelize from 'sequelize';

const db = new Sequelize(
  'b1rfy8iku15cgjcadhqg', // base de datos
  'udvyakixgkwunc2c',     // usuario
  'Ea4gdf91dxuS84PIJUQ6', // contraseña
  {
    host: 'b1rfy8iku15cgjcadhqg-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306, // agregar explícitamente el puerto si es necesario
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

export default db;
