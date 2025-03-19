const mongoose = require("mongoose");

module.exports.connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connect success!')
    }
    catch(err){
        console.log('Database connect failed!')
    }
}



