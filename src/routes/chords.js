const express = require ('express')
const router = express.Router();
const { getChord, getChords } = require('../controllers/chordsController')
const { parseNoteParams } = require('../middleware/parseNoteAccidentals')

router.get('/:root/:type', parseNoteParams, getChord);
router.get('/:root', parseNoteParams, getChords);

module.exports = router;