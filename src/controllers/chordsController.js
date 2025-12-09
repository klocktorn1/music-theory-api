const { generateChord } = require("../services/chordService");




const getChord = async (req, res) => {

    const {root, type} = req.params
    try {

        const chord = generateChord(root, type)
        return res.json({ chord: chord });
    } catch (err) {
        return res.status(500).json({ error: `getChord inside chordsController: ${err.message}`});
    }
}


module.exports = { getChord }