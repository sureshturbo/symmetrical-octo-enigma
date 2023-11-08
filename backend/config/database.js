///https://www.npmjs.com/package/mysql2-promise
///npm install mysql2-promise
///https://www.npmjs.com/package/dotenv
const mysql = require('mysql2/promise');
require('dotenv').config();
const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT || 3306,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit: 0 
}
    
);

module.exports = pool;