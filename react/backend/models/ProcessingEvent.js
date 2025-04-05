const mongoose = require('mongoose');
const { Schema } = mongoose;

const processingEventSchema = new Schema({
    eventId: { type: String, required: true, unique: true },
    batchId: { type: String, required: true, ref: 'ProduceBatch' },
    processorId: { type: String, required: true, ref: 'Intermediary' },
    processingDetails: String,
    ingredientsUsed: { type: Map, of: String }, // { ingredientId: quantity }
    outputBatchId: { type: String, ref: 'ProduceBatch' }, // For processed goods
    processingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProcessingEvent', processingEventSchema);