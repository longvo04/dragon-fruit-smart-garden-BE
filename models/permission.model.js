const mongoose = require('mongoose');
const PermissionSchema = new mongoose.Schema({
    name: String,
    descrpt: String
});
module.exports = mongoose.model('Permission', PermissionSchema);
