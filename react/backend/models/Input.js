const mongoose = require('mongoose');
const { Schema } = mongoose;

const inputSchema = new Schema({
    inputId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, enum: ['Seed', 'Fertilizer', 'Pesticide', 'Other'], required: true },
    brand: String,
    batchNumber: String,
    supplier: String
});

module.exports = mongoose.model('Input', inputSchema);