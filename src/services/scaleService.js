const { NOTES } = require("../data/notes.js");
const { SCALES } = require("../data/scales.js");
const { DEGREES } = require("../data/degrees.js");

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];

const LETTERS2 = ["C#", "D#", "Eb", "Fb", "Gb", "Ab", "B#"]

const getFirstLetter = note => note[0];

const cleanScale = (type) => {
    let result = type;
    result = result.replace(/sharp/gi, '#');
    result = result.replace(/flat/gi, 'b');

    result = result.replace(/([a-z])([A-Z])/g, '$1 $2');

    result = result.replace(/([a-zA-Z])([#b]\d+)/g, '$1 $2');

    return result;

}

const generateScale = (root, type) => {

    if (root.length === 3) throw new Error(`${root}${type} <---- no.`)

    const scaleFormula = SCALES[type];
    if (!scaleFormula) throw new Error(`Unknown scale type: ${type}`);

    const rootIndex = NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(root));
    if (rootIndex === -1) throw new Error(`Invalid root note: ${root}`);

    const firstLetterInRoot = getFirstLetter(root);


    const firstLetterInRootIndex = LETTERS.indexOf(firstLetterInRoot);
    const scaleNotes = type === "chromatic"
        ? scaleFormula.map((interval, i) => {
            const pitchIndex = (rootIndex + interval) % NOTES.length;
            const enharmonicNotes = NOTES[pitchIndex].names;

            const preferFlats = root.includes("b");
            const preferSharps = root.includes("#");
            if (i === 0) return root;
            const filtered = enharmonicNotes.filter(
                n => !(n.includes("bb") || n.includes("##"))
            );
            // Choose enharmonic spelling based on key signature context
            const flatNote = filtered.find(n => n.includes("b"));
            const sharpNote = filtered.find(n => n.includes("#"));
            const naturalNote = filtered.find(n => !n.includes("#") && !n.includes("b"));

            // console.log("flatNote: ", flatNote)
            // console.log("sharpNote: ", sharpNote)
            // console.log("naturalNote: ", naturalNote)

            if (preferFlats && flatNote) return flatNote;
            if (preferSharps && sharpNote) return sharpNote;

            return naturalNote || flatNote || sharpNote;
        })
        : scaleFormula.map((interval, i) => {
            const pitchIndex = (rootIndex + interval) % NOTES.length;
            const enharmonicNotes = NOTES[pitchIndex].names;
            const expectedLetter = LETTERS[(firstLetterInRootIndex + i) % SCALES[type].length];
            const chosen = enharmonicNotes.find(n => getFirstLetter(n) === expectedLetter);
            return chosen || enharmonicNotes[0];
        });

    const degrees = scaleFormula.map(interval => DEGREES[interval])

    const cleanedScale = cleanScale(type)

    
    const response = { root: root, scale: `${root} ${cleanedScale}`, formula: scaleFormula, degrees: degrees, notes: scaleNotes }
    return response;
};

generateScale("C", "lydian")
const test = () => {
    LETTERS2.map((letter) => {
        return console.log(generateScale(letter, "melodicMinor"))
    })
}

module.exports = { generateScale }