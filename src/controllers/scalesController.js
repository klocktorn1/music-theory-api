const { generateScale } = require("../services/scaleService");


const cleanNoteParams = (note) => {
    if (note.includes("sharp")) return note.replace("sharp", "#")
    if (note.includes("flat")) return note.replace("flat", "b")
    return note
}

const getScale = async (req, res) => {

    const { root, type } = req.params
    try {

        const scale = generateScale(cleanNoteParams(root), type)
        return res.json({ scale: scale });
    } catch (err) {
        return res.status(500).json({ error: `getScale inside scalesController: ${err.message}` });
    }
}


module.exports = { getScale }