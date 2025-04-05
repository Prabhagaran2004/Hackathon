const express = require('express');
const router = express.Router();
const inputApplicationController = require('../controllers/inputApplicationController.js');

router.post('/', inputApplicationController.createApplication);
router.get('/', inputApplicationController.getAllApplications);
router.get('/:id', inputApplicationController.getApplicationById);
router.get('/farmer/:farmerId', inputApplicationController.getApplicationsByFarmer);
router.put('/:id', inputApplicationController.updateApplication);
router.delete('/:id', inputApplicationController.deleteApplication);

module.exports = router;