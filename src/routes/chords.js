const express = require ('express')
const router = express.Router();
const { getChord } = require('../controllers/chordsController')
const { parseNoteParams } = require('../middleware/parseNoteAccidentals')

router.get('/:root/:type', parseNoteParams, getChord);

module.exports = router;