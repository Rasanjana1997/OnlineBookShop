require("dotenv").config();
const products = require("./data/Products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log("Data Import SUCCESS");

        process.exit();

    } catch (error) {
        console.log("Data Import FAIL");
        process.exit(1);
    }
};

importData();