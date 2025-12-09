const express = require ('express')
const router = express.Router();
const { getScale } = require('../controllers/scalesController')

router.get('/:root/:type', getScale);

module.exports = router;