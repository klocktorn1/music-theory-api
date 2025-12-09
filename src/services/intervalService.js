const { NOTES } = require("../data/notes.js");
const { INTERVALS } = require("../data/intervals.js");

function getKeyByValue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) return key;
    }
    return undefined;
}





const generateInterval = (from, to) => {
    const fromIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(from));
    const toIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(to));
    if (fromIndex === -1 || toIndex === -1) throw new Error(`One or both of the notes entered is invalid: ${from} or ${to}`);
    const intervalIndex = toIndex - fromIndex;
    const interval = INTERVALS[intervalIndex];
    return interval;
};


const generateNote = (root, interval) => {
    const rootIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(root));
    const intervalIndex = getKeyByValue(INTERVALS, interval)
    if (!intervalIndex) throw new Error(`Interval ${interval} does not exist`)

    const noteFromIntervalIndex = (rootIndex + parseInt(intervalIndex)) % NOTES.length



    const notesFromInterval = NOTES[noteFromIntervalIndex].names

    const includesFlat = root.includes("b")
    const includesSharp = root.includes("#")



    const noteFromInterval =
        (includesFlat
            ? notesFromInterval.find(note => note[1] === "b")
            : includesSharp
                ? notesFromInterval.find(note => note[1] === "#")
                : notesFromInterval.find(note => note.length === 1))

    console.log(noteFromInterval);
    

    return noteFromInterval
}

generateNote("Cb", "M3")

module.exports = { generateInterval, generateNote }