const express = require('express')
const router = express.Router();
const { getChord, getChordsMultipleKeys, getChordsOneKey } = require('../controllers/chordsController')
const { parseNoteParams } = require('../middleware/parseNoteAccidentals')

router.get('/:root/:type', parseNoteParams, getChord);
router.get('/:root', parseNoteParams, getChordsOneKey);
router.get('/', parseNoteParams, getChordsMultipleKeys);

module.exports = router;