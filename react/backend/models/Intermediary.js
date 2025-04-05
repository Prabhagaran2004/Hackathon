const mongoose = require('mongoose');
const { Schema } = mongoose;

const intermediarySchema = new Schema({
    intermediaryId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['Aggregator', 'Transporter', 'Processor', 'Distributor', 'Retailer'], required: true },
    contactInfo: {
        phone: String,
        email: String
    },
    locationCoords: {
        latitude: Number,
        longitude: Number
    }
});

module.exports = mongoose.model('Intermediary', intermediarySchema);