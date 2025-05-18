import Sequelize  from "sequelize";

const db = new Sequelize('b1rfy8iku15cgjcadhqg', 'udvyakixgkwunc2c', '', {
    host: 'b1rfy8iku15cgjcadhqg-mysql.services.clever-cloud.com',
    dialect: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;