const { Farmer } = require('../models');

// Controller to create a new farmer
exports.createFarmer = async (req, res) => {
    try {
        const newFarmer = new Farmer(req.body);
        const savedFarmer = await newFarmer.save();
        res.status(201).json(savedFarmer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all farmers
exports.getAllFarmers = async (req, res) => {
    try {
        const farmers = await Farmer.find();
        res.json(farmers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific farmer by ID
exports.getFarmerById = async (req, res) => {
    try {
        const farmer = await Farmer.findOne({ farmerId: req.params.id });
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.json(farmer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a farmer by ID
exports.updateFarmer = async (req, res) => {
    try {
        const updatedFarmer = await Farmer.findOneAndUpdate({ farmerId: req.params.id }, req.body, { new: true });
        if (!updatedFarmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.json(updatedFarmer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a farmer by ID
exports.deleteFarmer = async (req, res) => {
    try {
        const deletedFarmer = await Farmer.findOneAndDelete({ farmerId: req.params.id });
        if (!deletedFarmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.json({ message: 'Farmer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
