const { SaleTransaction } = require('../models');

// Controller to create a new sale transaction
exports.createSaleTransaction = async (req, res) => {
    try {
        const newSaleTransaction = new SaleTransaction(req.body);
        const savedSaleTransaction = await newSaleTransaction.save();
        res.status(201).json(savedSaleTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all sale transactions
exports.getAllSaleTransactions = async (req, res) => {
    try {
        const saleTransactions = await SaleTransaction.find().populate('batchId sellerId buyerId');
        res.json(saleTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific sale transaction by ID
exports.getSaleTransactionById = async (req, res) => {
    try {
        const saleTransaction = await SaleTransaction.findById(req.params.id).populate('batchId sellerId buyerId');
        if (!saleTransaction) {
            return res.status(404).json({ message: 'Sale Transaction not found' });
        }
        res.json(saleTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get sale transactions by batch ID
exports.getSaleTransactionsByBatchId = async (req, res) => {
    try {
        const saleTransactions = await SaleTransaction.find({ batchId: req.params.batchId })
            .populate('batchId sellerId buyerId');
        res.json(saleTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a sale transaction by ID
exports.updateSaleTransaction = async (req, res) => {
    try {
        const updatedSaleTransaction = await SaleTransaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSaleTransaction) {
            return res.status(404).json({ message: 'Sale Transaction not found' });
        }
        res.json(updatedSaleTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a sale transaction by ID
exports.deleteSaleTransaction = async (req, res) => {
    try {
        const deletedSaleTransaction = await SaleTransaction.findByIdAndDelete(req.params.id);
        if (!deletedSaleTransaction) {
            return res.status(404).json({ message: 'Sale Transaction not found' });
        }
        res.json({ message: 'Sale Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};