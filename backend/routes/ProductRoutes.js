const express = require("express");
const Router = express.Router();

const {getAllproducts, getProductById} = require("../controller/ProductControllers");

//@desc Get all the products from db
//@route /api/products/
Router.get("/", getAllproducts);

//@desc Get a product from db
//@route /api/products/:id
Router.get("/:id", getProductById);


module.exports = Router;