const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');


const notesRouter = require('./routes/notes');
const chordsRouter = require('./routes/chords');
const scalesRouter = require('./routes/scales');
const intervalsRouter = require('./routes/intervals');
app.use(cors())

const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));


app.use(express.json());
app.use('/api/v1/notes', notesRouter);
app.use('/api/v1/chords', chordsRouter);
app.use('/api/v1/scales', scalesRouter);
app.use('/api/v1/intervals', intervalsRouter);
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint Not Found' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong! Could be something with payload?' });
});

module.exports = app;
