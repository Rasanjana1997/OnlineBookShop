require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const ProductRoutes = require("./routes/ProductRoutes");

connectDB();

//to send data to frontend in json format
app.use(express.json());

app.use("/api/products", ProductRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("Server running on port: "+ PORT ));