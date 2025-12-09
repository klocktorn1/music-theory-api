const express = require('express');
const app = express();



const notesRouter = require('./routes/notes');
const chordsRouter = require('./routes/chords');
const scalesRouter = require('./routes/scales');
const intervalsRouter = require('./routes/intervals');




app.use(express.json());

app.use('/notes', notesRouter);
app.use('/chords', chordsRouter);
app.use('/scales', scalesRouter);
app.use('/intervals', intervalsRouter);


app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong! Could be something with payload?' });
});

module.exports = app;
