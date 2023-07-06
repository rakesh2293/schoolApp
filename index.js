const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usersController = require("../retail_order_management/Controller/usersController");
const categoryController = require("../retail_order_management/Controller/categoryController");
const itemController = require("../retail_order_management/Controller/itemController");
const orderController = require("../retail_order_management/Controller/orderController");
const port = process.env.PORT || 3000; 

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use("/users", usersController);
app.use("/category", categoryController);
app.use("/items", itemController);
app.use("/orders", orderController);

app.get('/', function (req, res) {
  res.send('Hello User Please Send the API Name Properly!');
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log('info',`The server has started in port ${port}`);
});