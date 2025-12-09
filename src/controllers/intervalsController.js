const { generateInterval, generateNote } = require("../services/intervalService");


const cleanNoteParams = (note) => {
    if (note.includes("sharp"))
}

const getInterval = async (req, res) => {

    const {from, to} = req.params
    try {

        const interval = generateInterval(from, to)
        return res.json({ interval });
    } catch (err) {
        return res.status(500).json({ error: `getInterval inside intervalsController: ${err.message}`});
    }
}


const getNote = async (req, res) => {
    const { root, interval } = req.params
    try {

        const note = generateNote(root, interval)
        return res.json({ note });
    } catch (err) {
        return res.status(500).json({ error: `getNotes inside intervalsController: ${err.message}`});
    }
}


module.exports = { getInterval, getNote }