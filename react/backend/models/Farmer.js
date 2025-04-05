const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmerSchema = new Schema({
    farmerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: String,
    contactInfo: {
        phone: String,
        email: String
    },
    farmLocationCoords: {
        latitude: Number,
        longitude: Number
    },
    farmSize: Number,
    cropsGrown: [String],
    certifications: [String],
    bankDetails: {
        accountNumber: String,
        ifscCode: String // Be cautious about storing sensitive data securely
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);