const { NOTES } = require("../data/notes.js");


const DEGREE_MAP = {
  0: "1",
  1: "b2",
  2: "2",
  3: "b3",
  4: "3",
  5: "4",
  6: "b5",
  7: "5",
  8: "b6",
  9: "6",
  10: "b7",
  11: "7"
};

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];

// Map scale degrees to diatonic letter offsets from the root
const DEGREE_TO_LETTER_OFFSET = {
  "1": 0,
  "b2": 1,
  "2": 1,
  "b3": 2,
  "3": 2,
  "4": 3,
  "b5": 4,
  "5": 4,
  "b6": 5,
  "6": 5,
  "b7": 6,
  "7": 6
};

// Helper: get the first letter of a note
function getLetter(note) {
  return note[0];
}

// Helper: get all enharmonics for a semitone
function getNoteNames(semitone) {
  return NOTES[semitone % 12].names;
}

// Main function: generate chromatic scale
function generateChromaticScale(root) {
  // Find root semitone index
  const rootIndex = NOTES.findIndex(noteObj => noteObj.names.includes(root));
  if (rootIndex === -1) throw new Error("Invalid root note");

  const rootLetter = getLetter(root);
  const rootLetterIndex = LETTERS.indexOf(rootLetter);

  const scale = [];

  for (let i = 0; i < 12; i++) {
    const degree = DEGREE_MAP[i];
    const letterOffset = DEGREE_TO_LETTER_OFFSET[degree];
    const targetLetter = LETTERS[(rootLetterIndex + letterOffset) % 7];

    const candidates = getNoteNames((rootIndex + i) % 12);

    // Pick the enharmonic that matches the expected letter
    const selected = candidates.find(n => getLetter(n) === targetLetter) || candidates[0];

    scale.push(selected);
  }

  return scale;
}

// Examples


const test = () => { 


  }
console.log(generateChromaticScale("C"));

