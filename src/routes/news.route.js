const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/SIteController');

router.use('/search', newsController.search);
router.use('/', newsController.index);

module.exports = router;