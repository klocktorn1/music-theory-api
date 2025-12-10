const express = require ('express')
const router = express.Router();
const { getInterval, getNote } = require('../controllers/intervalsController')
const { parseNoteParams } = require('../middleware/parseNoteAccidentals')

router.get('/:from/:to', parseNoteParams, getInterval);
router.get('/build/:root/:interval', parseNoteParams, getNote);

module.exports = router;