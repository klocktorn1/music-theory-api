const { generateScale } = require("../services/scaleService");


const getScale = async (req, res) => {

    const { root, type } = req.params
    try {

        const scale = generateScale(root, type)
        return res.json(scale );
    } catch (err) {
        return res.status(500).json({ error: `getScale inside scalesController: ${err.message}` });
    }
}


module.exports = { getScale }