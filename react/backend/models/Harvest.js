const mongoose = require('mongoose');
const { Schema } = mongoose;

const harvestSchema = new Schema({
    farmerId: { type: String, required: true, ref: 'Farmer' },
    cropType: { type: String, required: true },
    quantity: String,
    harvestDate: { type: Date, required: true },
    qualityParameters: { type: Map, of: String },
    storageConditions: String
});

module.exports = mongoose.model('Harvest', harvestSchema); 