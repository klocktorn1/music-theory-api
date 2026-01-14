const { generateChord, generateChordsMultipleKeys, generateChordsOneKey } = require("../services/chordService");


const getChord = async (req, res) => {

    const { root, type } = req.params
    try {

        const chord = generateChord(root, type)
        return res.json(chord);
    } catch (err) {
        return res.status(500).json({ error: `getChord inside chordsController: ${err.message}` });
    }
}

const getChordsMultipleKeys = (req, res) => {

    const { root, type } = req.query
    try {

        const chords = generateChordsMultipleKeys(root, type)
        return res.json({chords});
    } catch (err) {
        return res.status(500).json({ error: `getChordsMultipleKeys inside chordsController: ${err.message}` });
    }
}

const getChordsOneKey = (req, res) => {

    const { type } = req.query
    const root = req.params.root
    try {

        const chords = generateChordsOneKey(root, type)
        return res.json({chords});
    } catch (err) {
        return res.status(500).json({ error: `getChordsOneKey inside chordsController: ${err.message}` });
    }
}


module.exports = { getChord, getChordsMultipleKeys, getChordsOneKey }