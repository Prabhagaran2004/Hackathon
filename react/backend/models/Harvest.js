const mongoose = require('mongoose');
const { Schema } = mongoose;

const harvestSchema = new Schema({
    farmerId: { type: String, required: true, ref: 'Farmer' },
    cropType: { type: String, required: true },
    quantity: String,
    harvestDate: { type: Date, required: true },
    qualityParameters: { type: Map, of: String }, // e.g., {'moisture': '13.0%', 'grade': 'A'}
    storageConditions: String
});

module.exports = mongoose.model('Harvest', harvestSchema);