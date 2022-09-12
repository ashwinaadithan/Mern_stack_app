const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    carName: {
        type: String,
        required: [true, "Please add a text value"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Car', carSchema)
