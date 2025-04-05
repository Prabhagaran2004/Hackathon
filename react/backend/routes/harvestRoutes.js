const express = require('express');
const router = express.Router();
const harvestController = require('../controllers/harvestController.js');

router.post('/', harvestController.createHarvest);
router.get('/', harvestController.getAllHarvests);
router.get('/:id', harvestController.getHarvestById);
router.get('/farmer/:farmerId', harvestController.getHarvestsByFarmer);
router.put('/:id', harvestController.updateHarvest);
router.delete('/:id', harvestController.deleteHarvest);

module.exports = router;