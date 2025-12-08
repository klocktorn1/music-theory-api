const express = require ('express')
const router = express.Router();
const { getAllNotes } = require('../controllers/notesController')

router.get('/', getAllNotes);

module.exports = router;