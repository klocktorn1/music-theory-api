const { NOTES } = require("../data/notes.js");
const { INTERVALS } = require("../data/intervals.js");
const { generateScale } = require("./scaleService.js");

const generateInterval = (from, to) => {
    const fromIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(from));
    const toIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(to));
    if (fromIndex === -1 || toIndex === -1) throw new Error(`One or both of the notes entered is invalid: ${from} or ${to}`);
    const intervalIndex = ((toIndex - fromIndex) + 12) % 12;
    const interval = INTERVALS[intervalIndex];
    return interval;
};


const generateNote = (root, interval) => {
    const rootIndex = NOTES.findIndex(enharmonicNote => enharmonicNote.names.includes(root));
    const intervalSemitones = INTERVALS[interval]
    if (!intervalSemitones) throw new Error(`Interval ${interval} does not exist`)

    const { notes } = generateScale(root, "chromatic")
    const chromaticScale = notes

    const indexFromSemitones = (rootIndex + parseInt(intervalSemitones)) % NOTES.length

    const enharmonicChoices = NOTES[indexFromSemitones].names

    const [chosenEnharmonic] = enharmonicChoices.filter(note => chromaticScale.includes(note))

    return chosenEnharmonic
}

generateNote("F#", "P4")

module.exports = { generateInterval, generateNote }


// need to figure out how it chooses the correct enharmonics. now it says: if root includes flat, choose the enharmonic where the second letter is a b
// maybe if i get the ionian scale for the root note that is put in i can say: if one element in enharmonicChoices is inside the chromaticScale, choose that note.
//  take an array and look inside another array. if one element from the first array matches one element in the second array, take that

// const includesFlat = root.includes("b")
// const includesSharp = root.includes("#")
// const chosenEnharmonic =
//     (includesFlat
//         ? enharmonicChoices.find(note => note[1] === "b")
//         : includesSharp
//             ? enharmonicChoices.find(note => note[1] === "#")
//             : enharmonicChoices.find(note => note.length === 1))