const mongoose = require('mongoose');

const HatSchema = new mongoose.Schema({
    color: { type: String, required: true, minlength: 3},
    price: { type: Number, required: true, minlength: 3},
    stock: {type: Number}
}, {timestamps: true});

const BeltSchema = new mongoose.Schema({
    color: { type: String, required: true, minlength: 3},
    price: { type: Number, required: true, minlength: 3},
    stock: {type: Number} 
}, {timestamps: true});

const Hat = mongoose.model('Hat', HatSchema);
const Belt = mongoose.model('Belt', BeltSchema);


module.exports = {
    Hat: Hat,
    Belt : Belt
}