const express = require('express');
const router = express.Router();

const controller = require('../controller/default-controller');


router.get('/status', controller.get);




module.exports = router;


    