const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    room: String
});

roomSchema.methods.addRoom = async function ( room ) {
    try {
        this.room = this.room.concat({ room });
        await this.save();
        return this.messages;
    } catch (err) {
        console.log(err);
    }
}

// collection
const Rooms = mongoose.model('rooms', roomSchema);
module.exports = Rooms;