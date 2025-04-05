const mongoose = require('mongoose');
const { Schema } = mongoose;

const transferEventSchema = new Schema({
    eventId: { type: String, required: true, unique: true },
    batchId: { type: String, required: true, ref: 'ProduceBatch' },
    fromPartyId: { type: String, required: true },
    fromPartyType: { type: String, enum: ['Farmer', 'Intermediary'], required: true },
    toPartyId: { type: String, required: true },
    toPartyType: { type: String, enum: ['Farmer', 'Intermediary'], required: true },
    quantity: String,
    transferDate: { type: Date, required: true },
    locationCoords: {
        latitude: Number,
        longitude: Number
    },
    handlingConditions: String // e.g., temperature during transport
});

module.exports = mongoose.model('TransferEvent', transferEventSchema);