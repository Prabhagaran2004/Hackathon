const { ProcessingEvent } = require('../models');

// Controller to create a new processing event
exports.createProcessingEvent = async (req, res) => {
    try {
        const newProcessingEvent = new ProcessingEvent(req.body);
        const savedProcessingEvent = await newProcessingEvent.save();
        res.status(201).json(savedProcessingEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all processing events
exports.getAllProcessingEvents = async (req, res) => {
    try {
        const processingEvents = await ProcessingEvent.find().populate('batchId processorId outputBatchId');
        res.json(processingEvents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific processing event by ID
exports.getProcessingEventById = async (req, res) => {
    try {
        const processingEvent = await ProcessingEvent.findById(req.params.id).populate('batchId processorId outputBatchId');
        if (!processingEvent) {
            return res.status(404).json({ message: 'Processing Event not found' });
        }
        res.json(processingEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get processing events by batch ID
exports.getProcessingEventsByBatchId = async (req, res) => {
    try {
        const processingEvents = await ProcessingEvent.find({ batchId: req.params.batchId })
            .populate('batchId processorId outputBatchId');
        res.json(processingEvents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a processing event by ID
exports.updateProcessingEvent = async (req, res) => {
    try {
        const updatedProcessingEvent = await ProcessingEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProcessingEvent) {
            return res.status(404).json({ message: 'Processing Event not found' });
        }
        res.json(updatedProcessingEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a processing event by ID
exports.deleteProcessingEvent = async (req, res) => {
    try {
        const deletedProcessingEvent = await ProcessingEvent.findByIdAndDelete(req.params.id);
        if (!deletedProcessingEvent) {
            return res.status(404).json({ message: 'Processing Event not found' });
        }
        res.json({ message: 'Processing Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};