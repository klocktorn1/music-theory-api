const express = require ('express')
const router = express.Router();
const { getChord } = require('../controllers/chordsController')

router.get('/:root/:type', getChord);

module.exports = router;