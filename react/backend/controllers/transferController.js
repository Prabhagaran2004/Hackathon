const { TransferEvent } = require('../models');

// Controller to create a new transfer event
exports.createTransferEvent = async (req, res) => {
    try {
        const newTransferEvent = new TransferEvent(req.body);
        const savedTransferEvent = await newTransferEvent.save();
        res.status(201).json(savedTransferEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all transfer events
exports.getAllTransferEvents = async (req, res) => {
    try {
        const transferEvents = await TransferEvent.find().populate('batchId fromPartyId toPartyId');
        res.json(transferEvents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific transfer event by ID
exports.getTransferEventById = async (req, res) => {
    try {
        const transferEvent = await TransferEvent.findById(req.params.id).populate('batchId fromPartyId toPartyId');
        if (!transferEvent) {
            return res.status(404).json({ message: 'Transfer Event not found' });
        }
        res.json(transferEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get transfer events for a specific batch ID
exports.getTransferEventsByBatchId = async (req, res) => {
    try {
        const transferEvents = await TransferEvent.find({ batchId: req.params.batchId })
            .populate('batchId fromPartyId toPartyId')
            .sort({ transferDate: 1 });
        res.json(transferEvents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a transfer event by ID
exports.updateTransferEvent = async (req, res) => {
    try {
        const updatedTransferEvent = await TransferEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTransferEvent) {
            return res.status(404).json({ message: 'Transfer Event not found' });
        }
        res.json(updatedTransferEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a transfer event by ID
exports.deleteTransferEvent = async (req, res) => {
    try {
        const deletedTransferEvent = await TransferEvent.findByIdAndDelete(req.params.id);
        if (!deletedTransferEvent) {
            return res.status(404).json({ message: 'Transfer Event not found' });
        }
        res.json({ message: 'Transfer Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};