const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController.js');

router.post('/', saleController.createSaleTransaction);
router.get('/', saleController.getAllSaleTransactions);
router.get('/batch/:batchId', saleController.getSaleTransactionsByBatchId);
router.get('/:id', saleController.getSaleTransactionById);
router.put('/:id', saleController.updateSaleTransaction);
router.delete('/:id', saleController.deleteSaleTransaction);

module.exports = router;