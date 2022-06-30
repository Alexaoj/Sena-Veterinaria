const mysql = require('mysql');
const {promisify} require('util');
const {database} = require ('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err. connecion) => {
    if (err){
        if (err.code === 'PROTOCOL_CONECCTION_LDST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.conde === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSE') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
    return: 
});

// promisify pool query
pool.query = promisify(pool.query);
module.exports = pool;

  