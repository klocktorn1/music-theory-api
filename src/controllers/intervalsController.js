const { generateInterval, generateNote } = require("../services/intervalService");


const cleanNoteParams = (note) => {
    if (note.includes("sharp")) return note.replace("sharp", "#")
    if (note.includes("flat")) return note.replace("flat", "b")
    return note
}

const getInterval = async (req, res) => {

    const { from, to } = req.params
    try {

        const interval = generateInterval(cleanNoteParams(from), cleanNoteParams(to))
        return res.json({ interval });
    } catch (err) {
        return res.status(500).json({ error: `getInterval inside intervalsController: ${err.message}` });
    }
}


const getNote = async (req, res) => {
    const { root, interval } = req.params
    try {

        const note = generateNote(cleanNoteParams(root), interval)
        return res.json({ note });
    } catch (err) {
        return res.status(500).json({ error: `getNote inside intervalsController: ${err.message}` });
    }
}


module.exports = { getInterval, getNote }