const mongoose = require('mongoose');
const WorkerSchema = new mongoose.Schema({
    name: String,
    role: String,
    contact: String,
    hireDate: Date,
    email: String,
    password: String,
    avatar: String
});
module.exports = mongoose.model('Worker', WorkerSchema);
