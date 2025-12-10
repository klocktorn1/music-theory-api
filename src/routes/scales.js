const express = require ('express')
const router = express.Router();
const { getScale } = require('../controllers/scalesController')
const { parseNoteParams } = require('../middleware/parseNoteAccidentals')

router.get('/:root/:type', parseNoteParams, getScale);

module.exports = router;