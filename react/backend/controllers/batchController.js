const { ProduceBatch, Harvest, TransferEvent } = require('../models');

// Controller to create a new produce batch
exports.createBatch = async (req, res) => {
    try {
        const newBatch = new ProduceBatch(req.body);
        const savedBatch = await newBatch.save();
        res.status(201).json(savedBatch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all produce batches
exports.getAllBatches = async (req, res) => {
    try {
        const batches = await ProduceBatch.find().populate('harvestId'); // Populate to get harvest details
        res.json(batches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific produce batch by ID
exports.getBatchById = async (req, res) => {
    try {
        const batch = await ProduceBatch.findOne({ batchId: req.params.id }).populate('harvestId');
        if (!batch) {
            return res.status(404).json({ message: 'Produce Batch not found' });
        }
        res.json(batch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get the traceability information for a batch
exports.getBatchTraceability = async (req, res) => {
    try {
        const batchId = req.params.id;
        const batch = await ProduceBatch.findOne({ batchId }).populate('harvestId');
        if (!batch) {
            return res.status(404).json({ message: 'Produce Batch not found' });
        }

        const harvest = await Harvest.findById(batch.harvestId).populate('farmerId');
        const transferEvents = await TransferEvent.find({ batchId }).sort({ transferDate: 1 }).populate('fromPartyId toPartyId');
        // Add other relevant events (Processing, Sales) as needed

        res.json({
            batch,
            harvest,
            transferEvents,
            // Add other event data here
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a produce batch by ID
exports.updateBatch = async (req, res) => {
    try {
        const updatedBatch = await ProduceBatch.findOneAndUpdate({ batchId: req.params.id }, req.body, { new: true });
        if (!updatedBatch) {
            return res.status(404).json({ message: 'Produce Batch not found' });
        }
        res.json(updatedBatch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a produce batch by ID
exports.deleteBatch = async (req, res) => {
    try {
        const deletedBatch = await ProduceBatch.findOneAndDelete({ batchId: req.params.id });
        if (!deletedBatch) {
            return res.status(404).json({ message: 'Produce Batch not found' });
        }
        res.json({ message: 'Produce Batch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
