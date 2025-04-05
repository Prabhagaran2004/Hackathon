const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController.js');

router.post('/', transferController.createTransferEvent);
router.get('/', transferController.getAllTransferEvents);
router.get('/batch/:batchId', transferController.getTransferEventsByBatchId);
router.get('/:id', transferController.getTransferEventById);
router.put('/:id', transferController.updateTransferEvent);
router.delete('/:id', transferController.deleteTransferEvent);

module.exports = router;