const { Input } = require('../models');

// Controller to create a new input
exports.createInput = async (req, res) => {
    try {
        const newInput = new Input(req.body);
        const savedInput = await newInput.save();
        res.status(201).json(savedInput);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all inputs
exports.getAllInputs = async (req, res) => {
    try {
        const inputs = await Input.find();
        res.json(inputs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific input by ID
exports.getInputById = async (req, res) => {
    try {
        const input = await Input.findById(req.params.id);
        if (!input) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json(input);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update an input by ID
exports.updateInput = async (req, res) => {
    try {
        const updatedInput = await Input.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInput) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json(updatedInput);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete an input by ID
exports.deleteInput = async (req, res) => {
    try {
        const deletedInput = await Input.findByIdAndDelete(req.params.id);
        if (!deletedInput) {
            return res.status(404).json({ message: 'Input not found' });
        }
        res.json({ message: 'Input deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};