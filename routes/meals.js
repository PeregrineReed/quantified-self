var express = require('express');
var router = express.Router();
var mealsController = require('../controllers/mealsController')

router.post('/', mealsController.create);
router.get('/', mealsController.index);
router.get('/:id', mealsController.show);

module.exports = router;
