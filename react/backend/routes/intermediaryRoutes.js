const express = require('express');
const router = express.Router();
const intermediaryController = require('../controllers/intermediaryController.js');

router.post('/', intermediaryController.createIntermediary);
router.get('/', intermediaryController.getAllIntermediaries);
router.get('/:id', intermediaryController.getIntermediaryById);
router.put('/:id', intermediaryController.updateIntermediary);
router.delete('/:id', intermediaryController.deleteIntermediary);

module.exports = router;