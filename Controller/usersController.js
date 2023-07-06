const express = require("express");

const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");
var jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel");
const httpUtil = require("../utils/HttpUtils");
const schema = require("../utils/Validator");

// get users
router.get("/getUsers", auth,async(req, res, next) => {
    try {
      const result = await userModel.getAllusers();
      res.status(200).json(httpUtil.getSuccessResponse(result));
    } catch (error) {
      res.status(500).json(httpUtil.getException(error));
    }
});
  
//insert users
router.post("/addusers", auth,async(req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (!error) {
        const result = await userModel.saveUser(req);
      } else {
        res.status(500).json(httpUtil.getException(error));
      }
      res.status(200).json(httpUtil.getCreationResponse(result));
    } catch (err) {
        res.status(500).json(httpUtil.getException(err));
    }
});
  
//update users
router.post("/updateUser/:id", auth,async (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (!error) {
        const result = await userModel.updateUser(req);
        res.status(200).json(httpUtil.getSuccessResponse(result));
      } else {
        res.status(500).json(httpUtil.getException(error));
      }
    } catch (err) {
      res.status(500).json(httpUtil.getException(err));
    }
});
  
//delete users
router.delete("/:id", auth,async (req, res, next) => {
    try {
        const result = await userModel.deleteeUser(req);
        res.status(200).json(httpUtil.getSuccessResponse(result));
    } catch (err) {
        res.status(500).json(httpUtil.getException(err));
    }
});

// Generate token
router.post("/login", async(req, res, next) => {
  try {
    const result = await userModel.generateToken(req);
    responseData = result['rows']
    jwt.sign({user:responseData}, "secretkey",(err,token)=> {
      res.json({token});
      res.status(200).json(httpUtil.getSuccessResponse(token));
    });  
  }
  catch (err) {
    res.status(500).json(httpUtil.getException(err));
  }
})

module.exports = router;