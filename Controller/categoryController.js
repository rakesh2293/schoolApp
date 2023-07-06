const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

//getcategory
router.get("/getCategory", auth, async(req,res) => {
    try {
        const newCategory = await pool.query(
        `SELECT * FROM category`)
        if(newCategory['rows'].length > 0) {
            res.json(newCategory['rows']);
        } else {
            res.send('No Data');
        }
    } catch (error) {
        console.log(err.message)
    }
})
  
//insert category
router.post("/addCategory",auth, async(req,res) => {
    try {
        categoryname = req.body.category_name,
        poi = req.body.poi,
        createdBy = req.body.created_by,
        updatedBy = req.body.modified_by,
        createdDate = req.body.created_date,
        updatedDate = req.body.updated_date
        const newUser = await pool.query(
        `INSERT INTO category(category_name,poi,created_by,modified_by,created_date,updated_date) VALUES ('${categoryname}','${poi}','${createdBy}','${updatedBy}','${createdDate}','${updatedDate}')`)
        res.send('New Category Added Successfully');
    } catch (err) {
        console.log(err.message)
    }
})

//update category
router.post("/updateUser/:id",auth, async (req, res, next) => {
try {
        id = req.params.id,
        category_name =  req.body.category_name,
        poi = req.body.poi
        const updateUser = await pool.query(
        "UPDATE category SET category_name = $1 poi = $3 WHERE id =$2", [user_name,poi,id])
        res.send('Update Category Detail SUCCESSFULLY!');
} catch (err) {
    console.log(err.message)
}
}) 
  
//delete category
router.delete("/:id", auth,  async (req, res, next) => {
    try {
        const id = req.params
        const delUser = await pool.query(
        `DELETE FROM category WHERE id = '${id}'`)
        res.send('SELECTED Category DELETED SUCCESSFULLY!');
    } catch (err) {
        console.log(err.message)
    }
}) 
module.exports = router;