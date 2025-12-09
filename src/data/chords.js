const CHORDS = {
major: [0, 4, 7],
minor: [0, 3, 7],
diminished: [0, 3, 6],
augmented: [0, 4, 8],
sus2: [0, 2, 7],
sus4: [0, 5, 7],
maj7: [0, 4, 7, 11],
dom7: [0, 4, 7, 10],
minor7: [0, 3, 7, 10],
minor7flat5: [0, 3, 6, 10],    // half-diminished
dim7: [0, 3, 6, 9],         // fully diminished
aug7: [0, 4, 8, 10],        // augmented dominant
maj7sharp5: [0, 4, 8, 11],
dom9: [0, 4, 7, 10, 14],        // 9th is 14 semitones aflatove root
maj9: [0, 4, 7, 11, 14],
minor9: [0, 3, 7, 10, 14],
dom11: [0, 4, 7, 10, 14, 17],
maj11: [0, 4, 7, 11, 14, 17],
minor11: [0, 3, 7, 10, 14, 17],
dom13: [0, 4, 7, 10, 14, 17, 21],
maj13: [0, 4, 7, 11, 14, 17, 21],
minor13: [0, 3, 7, 10, 14, 17, 21],
dom7flat9: [0, 4, 7, 10, 13],
dom7sharp9: [0, 4, 7, 10, 15],
dom7flat5: [0, 4, 6, 10],
dom7sharp5: [0, 4, 8, 10],
dom7sharp11: [0, 4, 7, 10, 18],   // #11 = augmented 4th = 18 semitones
dom7flat13: [0, 4, 7, 10, 20],
maj7sharp11: [0, 4, 7, 11, 18],     // Lydian sound
minorMaj7: [0, 3, 7, 11],       // minor with major 7th
minor6: [0, 3, 7, 9],
major6: [0, 4, 7, 9],
sus13: [0, 5, 7, 10, 21],       // sus4 + dominant 13
dim7: [0, 3, 6, 9],             // fully diminished
dim9: [0, 3, 6, 9, 14],
aug7: [0, 4, 8, 10],
wholeTone7: [0, 4, 8, 10],      // identical to augmented dominant
};


module.exports = {CHORDS}


