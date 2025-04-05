const express = require('express');
const router = express.Router();
const batchController = require('../controllers/batchController.js');

router.post('/', batchController.createBatch);
router.get('/', batchController.getAllBatches);
router.get('/:id', batchController.getBatchById);
router.get('/:id/traceability', batchController.getBatchTraceability);
router.put('/:id', batchController.updateBatch);
router.delete('/:id', batchController.deleteBatch);

module.exports = router;