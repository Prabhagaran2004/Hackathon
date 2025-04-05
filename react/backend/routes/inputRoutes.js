const express = require('express');
const router = express.Router();
const inputController = require('../controllers/inputController.js');

router.post('/', inputController.createInput);
router.get('/', inputController.getAllInputs);
router.get('/:id', inputController.getInputById);
router.put('/:id', inputController.updateInput);
router.delete('/:id', inputController.deleteInput);

module.exports = router;