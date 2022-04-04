var express = require('express');
var router = express.Router(); 

const primeController = require('../controllers/primeController'); 
 
router.post('/api/', primeController.getMedianLimit); 
 
module.exports = router; 