const express = require('express');
const router = express.Router();
const processingController = require('../controllers/processingController.js');

router.post('/', processingController.createProcessingEvent);
router.get('/', processingController.getAllProcessingEvents);
router.get('/batch/:batchId', processingController.getProcessingEventsByBatchId);
router.get('/:id', processingController.getProcessingEventById);
router.put('/:id', processingController.updateProcessingEvent);
router.delete('/:id', processingController.deleteProcessingEvent);

module.exports = router;