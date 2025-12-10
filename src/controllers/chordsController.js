const { generateChord } = require("../services/chordService");

const cleanNoteParams = (note) => {
    if (note.includes("sharp")) return note.replace("sharp", "#")
    if (note.includes("flat")) return note.replace("flat", "b")
    return note
}


const getChord = async (req, res) => {

    const {root, type} = req.params
    try {

        const chord = generateChord(cleanNoteParams(root), type)
        return res.json({ chord: chord });
    } catch (err) {
        return res.status(500).json({ error: `getChord inside chordsController: ${err.message}`});
    }
}


module.exports = { getChord }