const mongoose = require('mongoose');
const { Schema } = mongoose;

const inputApplicationSchema = new Schema({
    farmerId: { type: String, required: true, ref: 'Farmer' },
    inputId: { type: String, required: true, ref: 'Input' },
    quantity: String,
    applicationDate: { type: Date, required: true }
});

module.exports = mongoose.model('InputApplication', inputApplicationSchema);