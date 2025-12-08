const { NOTES } = require("../data/notes.js");
const { CHORDS } = require("../data/chords.js");

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];

const getLetter = note => note[0];

const findNoteIndex = (note) => {
    return NOTES.findIndex(enharmonicNotes => enharmonicNotes.names.includes(note));
};


const generateChord = (root, type) => {
    if (root.length === 3) {
        return `${root}${type} <--- are you serious? This is fucking stupid, no one would ever write this chord like this. there is most definetivly a better enharmonic equivalent to this chord you pompous, pretentious, poser idiot. If you EVER use this chord in a real musical setting i will find you. And i will kill you.`
    }
    // gets the chord formula (say minor7)
    const chordFormula = CHORDS[type];
    if (!chordFormula) throw new Error(`Unknown chord type: ${type}`);

    // gets the index in the NOTES array for the input root note (if Eb is root, index is 3)
    const rootIndex = findNoteIndex(root);
    if (rootIndex === -1) throw new Error(`Invalid root note: ${root}`);

    // rootletter is now E since getLetter removes everything except first letter
    const rootLetter = getLetter(root);

    //  get the index of the note E (rootLetter) inside the LETTERS variable (that would be 2)
    const rootLetterIndex = LETTERS.indexOf(rootLetter);

    // map over the chord formula, minor7 would be 0, 3, 7, 10. interval represents the number (0, 3, 7, 10)
    //  i represents the index of each number 0 = 0,         3 = 1     7 = 2       10 = 3
    const chordNotes = chordFormula.map((interval, i) => {

        // pitchIndex takes the rootIndex (in our case 3 since Eb is in the 3rd index of our NOTES array)
        // and then adds the first interval, 0 so 
        // first iteration is 0 + 3 = 3
        // second iteration, 3 + 3 = 6
        // third iteration 3 + 7 = 10
        // fourth iteration 3 + 10 = 13 but since % NOTES.length (12) it says 13 % 12 which would be = 1
        const pitchIndex = (rootIndex + interval) % NOTES.length;

        // first iteration, pitchIndex is 3 so NOTES[3] would be ["D#", "Eb",  "Fbb"]
        const enharmonicNotes = NOTES[pitchIndex].names;

        // first iteration i = 0 so rootLetterIndex = 2 so it would get index 2 + 0 * 2 = 2 so it would get the letter E from LETTERS
        // second itereration, i = 1 so 2 + 1 * 2 = 4 which would be G
        // third i = 2, 2 + 2 * 2 = 6 6 would be B
        //  fourth i = 3 so 2 + 3 * 2 = 8.  8 % 7 is 1 so 1 = D. lastly we would have E G B D
        const expectedLetter = LETTERS[(rootLetterIndex + i * 2) % 7];
        // find inside enharmonicNotes ( the enharmonic notes in given pitchIndex ) a note where the first letter matches each expectedLetter
        // add it to chosen
        const chosen = enharmonicNotes.find(n => getLetter(n) === expectedLetter);
        return chosen || enharmonicNotes[0];
    });
    
    return chordNotes;
};

module.exports = { generateChord };