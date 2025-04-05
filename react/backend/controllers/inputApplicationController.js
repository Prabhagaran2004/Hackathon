const { InputApplication } = require('../models');

// Controller to create a new input application
exports.createApplication = async (req, res) => {
    try {
        const newApplication = new InputApplication(req.body);
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get all input applications
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await InputApplication.find().populate('farmerId inputId');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific input application by ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await InputApplication.findById(req.params.id).populate('farmerId inputId');
        if (!application) {
            return res.status(404).json({ message: 'Input Application not found' });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get input applications by farmer ID
exports.getApplicationsByFarmer = async (req, res) => {
    try {
        const applications = await InputApplication.find({ farmerId: req.params.farmerId })
            .populate('farmerId inputId');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update an input application by ID
exports.updateApplication = async (req, res) => {
    try {
        const updatedApplication = await InputApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedApplication) {
            return res.status(404).json({ message: 'Input Application not found' });
        }
        res.json(updatedApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete an input application by ID
exports.deleteApplication = async (req, res) => {
    try {
        const deletedApplication = await InputApplication.findByIdAndDelete(req.params.id);
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Input Application not found' });
        }
        res.json({ message: 'Input Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};