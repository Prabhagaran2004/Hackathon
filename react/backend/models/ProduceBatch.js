const mongoose = require('mongoose');
const { Schema } = mongoose;

const produceBatchSchema = new Schema({
    batchId: { type: String, required: true, unique: true },
    harvestId: { type: String, required: true, ref: 'Harvest' },
    quantity: String,
    packagingInfo: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProduceBatch', produceBatchSchema);