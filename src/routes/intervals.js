const express = require ('express')
const router = express.Router();
const { getInterval, getNote } = require('../controllers/intervalsController')

router.get('/interval/:from/:to', getInterval);
router.get('/build/:root/:interval', getNote);

module.exports = router;