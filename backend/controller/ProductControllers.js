const product = require("../models/Product");

const getAllproducts = async (req, res) => {
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({Message:"server error"});
    }
}

const getProductById = async(req, res) => {
    const id = req.params.id;
    try {
        const selectedProduct = await product.findById(id);
        res.status(200).json(selectedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({Message:"server error"});
    }
}


module.exports = {
    getAllproducts,
    getProductById,
}