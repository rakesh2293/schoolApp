const pool = require("../db");

exports.getAllusers = async () => {
    try {
        const data = await pool.query(
            `SELECT user_name As username, email_id AS emailId,password AS passWord,created_by AS createdBy,modified_by AS updatedBy,
            created_date AS createdDate,updated_date AS updatedDate FROM users`)
      return data['rows'];
    } catch (err) {
      throw err;
    }
};

exports.saveUser = async (req) => {
    try {
        const request = {
            username:req.body.user_name,
            emailId:req.body.email_id,
            password:req.body.password,
            createdBy:req.body.created_by,
            updatedBy:req.body.modified_by,
            createdDate:req.body.created_date,
            updatedDate:req.body.updated_date
        }
        const res = await pool.query(
        `INSERT INTO users(user_name,email_id,password,created_by,modified_by,created_date,updated_date) VALUES 
        ('${request['username']}','${request['emailId']}','${request['password']}','${request['createdBy']}','${request['updatedBy']}','${request['createdDate']}','${request['updatedDate']}')`)
        return res;
    } catch (err) {
      throw err;
    }
};

exports.updateUser = async (req) => {
    try {
        id = req.params.id,
        user_name =  req.body.user_name
        const res = await pool.query(
            "UPDATE users SET user_name = $1 WHERE id =$2", [user_name,id])
        return res;
    } catch (err) {
      throw err;
    }
};

exports.deleteeUser = async (req) => {
    try {
        const id = req.params
        const res = await pool.query(
            `DELETE FROM users WHERE id = '${id}'`)
        return res;
    } catch (err) {
      throw err;
    }
};

exports.generateToken = async (req) => {
    try {
        emailId = req.body.email_id,
        password = req.body.password
        const res = await pool.query(
            `SELECT * FROM users WHERE email_id = '${emailId}' AND password = '${password}'`)
        return res;
    } catch (err) {
      throw err;
    }
};
