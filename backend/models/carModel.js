const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please add a text value"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Car', carSchema)
