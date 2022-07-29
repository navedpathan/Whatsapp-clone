const mongoose = require('mongoose');

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

// collection
const MsgContent = mongoose.model('msgcontents', whatsappSchema);
module.exports = MsgContent;