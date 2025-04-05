const { Intermediary } = require('../models');

// Controller to create a new intermediary
exports.createIntermediary = async (req, res) => {
    try {
        const newIntermediary = new Intermediary(req.body);
        const savedIntermediary = await newIntermediary.save();
        res.status(201).json(savedIntermediary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all intermediaries
exports.getAllIntermediaries = async (req, res) => {
    try {
        const intermediaries = await Intermediary.find();
        res.json(intermediaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific intermediary by ID
exports.getIntermediaryById = async (req, res) => {
    try {
        const intermediary = await Intermediary.findById(req.params.id);
        if (!intermediary) {
            return res.status(404).json({ message: 'Intermediary not found' });
        }
        res.json(intermediary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update an intermediary by ID
exports.updateIntermediary = async (req, res) => {
    try {
        const updatedIntermediary = await Intermediary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedIntermediary) {
            return res.status(404).json({ message: 'Intermediary not found' });
        }
        res.json(updatedIntermediary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete an intermediary by ID
exports.deleteIntermediary = async (req, res) => {
    try {
        const deletedIntermediary = await Intermediary.findByIdAndDelete(req.params.id);
        if (!deletedIntermediary) {
            return res.status(404).json({ message: 'Intermediary not found' });
        }
        res.json({ message: 'Intermediary deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};