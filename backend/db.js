const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: "11spinblade",
    host: 'localhost',
    port: 5432,
    database: 'clothingwebstoredb'
});

module.exports = pool;