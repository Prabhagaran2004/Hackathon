const { Harvest } = require('../models');

// Controller to create a new harvest
exports.createHarvest = async (req, res) => {
    try {
        const newHarvest = new Harvest(req.body);
        const savedHarvest = await newHarvest.save();
        res.status(201).json(savedHarvest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all harvests
exports.getAllHarvests = async (req, res) => {
    try {
        const harvests = await Harvest.find().populate('farmerId');
        res.json(harvests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific harvest by ID
exports.getHarvestById = async (req, res) => {
    try {
        const harvest = await Harvest.findById(req.params.id).populate('farmerId');
        if (!harvest) {
            return res.status(404).json({ message: 'Harvest not found' });
        }
        res.json(harvest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get harvests by farmer ID
exports.getHarvestsByFarmer = async (req, res) => {
    try {
        const harvests = await Harvest.find({ farmerId: req.params.farmerId }).populate('farmerId');
        res.json(harvests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a harvest by ID
exports.updateHarvest = async (req, res) => {
    try {
        const updatedHarvest = await Harvest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHarvest) {
            return res.status(404).json({ message: 'Harvest not found' });
        }
        res.json(updatedHarvest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a harvest by ID
exports.deleteHarvest = async (req, res) => {
    try {
        const deletedHarvest = await Harvest.findByIdAndDelete(req.params.id);
        if (!deletedHarvest) {
            return res.status(404).json({ message: 'Harvest not found' });
        }
        res.json({ message: 'Harvest deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};