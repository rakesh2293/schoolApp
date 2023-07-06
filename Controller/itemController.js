const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

//get all Items
router.get("/getItem",auth, async(req,res) => {
  try {
    const newItem = await pool.query(
      `SELECT * FROM items`)
    if(newItem['rows'].length > 0) {
      res.json(newItem['rows']);
    } else {
      res.send('No Data');
    }
  } catch (error) {
    console.log(err.message)
  }
})

//insert Items
router.post("/addItem",auth, async(req,res) => {
   try {
      itemName = req.body.item_name,
      category_id = req.body.category_id,
      createdBy = req.body.created_by,
      updatedBy = req.body.modified_by,
      createdDate = req.body.created_date,
      updatedDate = req.body.updated_date
      const newUser = await pool.query(
      `INSERT INTO items(item_name,category_id,created_by,modified_by,created_date,updated_date) VALUES ('${itemName}','${category_id}','${createdBy}','${updatedBy}','${createdDate}','${updatedDate}')`)
      res.send('New Category Added Successfully');
   } catch (err) {
     console.log(err.message)
   }
})

//update Items
router.post("/updateItem/:id",auth,async (req, res, next) => {
  try {
    id = req.params.id,
    itemName =  req.body.item_name,
    categoryId = req.body.category_id
    const updateUser = await pool.query(
    "UPDATE items SET item_name = $1 category_id = $3 WHERE id =$2", [itemName,categoryId,id])
    res.send('Update Category Detail SUCCESSFULLY!');
  } catch (err) {
    console.log(err.message)
  }
}) 

//delete Items
router.delete("/:id",auth, async (req, res, next) => {
  try {
    const id = req.params
    const delUser = await pool.query(
    `DELETE FROM items WHERE id = '${id}'`)
    res.send('SELECTED Items DELETED SUCCESSFULLY!');
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = router;