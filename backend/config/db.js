require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connection SUCCESS");
    }
    catch(err){
        console.log("MondoDB Connection FAIL");
        process.exit(1)
    }
}

module.exports = connectDB;