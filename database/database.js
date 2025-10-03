const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.ATLAS_URL;
const connectDB = async () => {
    try{
        await mongoose.connect(URL, {
        });
        console.log("Database successfully connected");
    }
    catch(err){
        console.error(`Error connecting to database : ${err}`);
        process.exit(1);
    }
};

module.exports = connectDB