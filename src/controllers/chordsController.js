const { generateChord, generateChords } = require("../services/chordService");


const getChord = async (req, res) => {

    const { root, type } = req.params
    try {

        const chord = generateChord(root, type)
        return res.json(chord);
    } catch (err) {
        return res.status(500).json({ error: `getChord inside chordsController: ${err.message}` });
    }
}

const getChords = (req, res) => {

    const { root } = req.params
    const { types } = req.query
    try {

        const chords = generateChords(root, types)
        return res.json(chords);
    } catch (err) {
        return res.status(500).json({ error: `getChords inside chordsController: ${err.message}` });
    }
}


module.exports = { getChord, getChords }