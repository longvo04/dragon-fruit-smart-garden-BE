const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    expireAt: {
        type: Date,
        expires: 180
    }
});

const Otp = mongoose.model('Otp', otpSchema, 'Otp');
module.exports = Otp;