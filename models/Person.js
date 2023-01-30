const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please Enter Name"],
            maxlength: [30, "Your Name cannot exceed 30 charachters"],
            unique:[true, "You have Entered A Duplicate Name"]
        },
        createAt: {
            type: Date,
            default: Date.now()
        },
    }
)
module.exports = mongoose.model('Person',PersonSchema);
