const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleTransactionSchema = new Schema({
    transactionId: { type: String, required: true, unique: true },
    batchId: { type: String, required: true, ref: 'ProduceBatch' },
    sellerId: { type: String, required: true },
    sellerType: { type: String, enum: ['Farmer', 'Intermediary'], required: true },
    buyerId: { type: String, required: true },
    buyerType: { type: String, enum: ['Intermediary', 'Consumer'], required: true },
    quantity: String,
    pricePerUnit: Number,
    transactionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SaleTransaction', saleTransactionSchema);