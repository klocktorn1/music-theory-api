const parseNoteAccidentals = (note) => {
    if (note.includes("sharp")) return note.replace("sharp", "#")
    if (note.includes("x")) return note.replace("x", "##")
    return note
}

// Middleware to parse note accidentals in route parameters
const parseNoteParams = (req, res, next) => {
    if (req.params.root) req.params.root = parseNoteAccidentals(req.params.root)
    if (req.params.from) req.params.from = parseNoteAccidentals(req.params.from)
    if (req.params.to) req.params.to = parseNoteAccidentals(req.params.to)
    next()
}

module.exports = { parseNoteParams };