
const {NOTES} = require('../data/notes')



const getAllNotes = async (req, res) => {
    try {
        return res.json(NOTES);
    } catch (err) {
        return res.status(500).json({ error: `getAllNotes inside notesController: ${err.message}`});
    }
}


module.exports = { getAllNotes }