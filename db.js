const Pool  = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    password:"User@1234",
    database:"demoDatabase",
    host:"localhost",
    port:5432
})

module.exports = pool;