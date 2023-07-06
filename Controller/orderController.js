const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

// get all Orders
router.get("/getOrders",auth, async(req,res) => {
  try {
    const newOrder = await pool.query(
      `SELECT * FROM orders`)
    if(newCategory['rows'].length > 0) {
      res.json(newOrder['rows']);
    } else {
      res.send('No Data');
    }
  } catch (error) {
    console.log(err.message)
  }
})

//insert Items
router.post("/addOrders",auth, async(req,res) => {
   try {
      orderName = req.body.order_name,
      item_id = req.body.item_id,
      user_id = req.body.user_id,
      createdBy = req.body.created_by,
      updatedBy = req.body.modified_by,
      createdDate = req.body.created_date,
      updatedDate = req.body.updated_date
      const newUser = await pool.query(
      `INSERT INTO orders(order_name,item_id,user_id,created_by,modified_by,created_date,updated_date) VALUES ('${orderName}','${item_id}','${user_id}','${createdBy}','${updatedBy}','${createdDate}','${updatedDate}')`)
      res.send('New Category Added Successfully');
   } catch (err) {
     console.log(err.message)
   }
})

//update Items
router.post("/updateItem/:id",auth, async (req, res, next) => {
  try {
    id = req.params.id,
    orderName =  req.body.order_name,
    item_id = req.body.item_id,
    user_id = req.body.user_id
    const updatItem = await pool.query(
    "UPDATE orders SET order_name = $1 item_id = $2 user_id = $3 WHERE id =$4", [orderName,item_id,user_id,id])
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
    `DELETE FROM orders WHERE id = '${id}'`)
    res.send('SELECTED Items DELETED SUCCESSFULLY!');
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = router;