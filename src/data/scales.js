const SCALES = {
    // Major scale modes (Diatonic)
    ionian: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10],

    // Harmonic Minor + modes
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
    locrianNat6: [0, 1, 3, 5, 6, 9, 10], // Mode 2
    ionianAug: [0, 2, 4, 5, 8, 9, 11], // Mode 3
    dorianSharp4: [0, 2, 3, 6, 7, 9, 10], // Mode 4
    phrygianDominant: [0, 1, 4, 5, 7, 8, 10], // Mode 5
    lydianSharp2: [0, 3, 4, 6, 7, 9, 11], // Mode 6
    ultralocrian: [0, 1, 3, 4, 6, 8, 9],  // Mode 7

    // Melodic Minor + modes
    melodicMinor: [0, 2, 3, 5, 7, 9, 11],
    dorianFlat2: [0, 1, 3, 5, 7, 9, 10],
    lydianAug: [0, 2, 4, 6, 8, 9, 11],
    lydianDominant: [0, 2, 4, 6, 7, 9, 10],
    mixolydianFlat6: [0, 2, 4, 5, 7, 8, 10],
    aeolianFlat5: [0, 2, 3, 5, 6, 8, 10],
    altered: [0, 1, 3, 4, 6, 8, 10], // Super Locrian

    // Pentatonic scales
    majorPentatonic: [0, 2, 4, 7, 9],
    minorPentatonic: [0, 3, 5, 7, 10],

    // Symmetric + other useful sets
    wholeTone: [0, 2, 4, 6, 8, 10],
    chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

module.exports = {SCALES};