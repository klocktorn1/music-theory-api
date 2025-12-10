const express = require('express');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');


const notesRouter = require('./routes/notes');
const chordsRouter = require('./routes/chords');
const scalesRouter = require('./routes/scales');
const intervalsRouter = require('./routes/intervals');


// Load your YAML
const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/chords', chordsRouter);
app.use('/api/scales', scalesRouter);
app.use('/api/intervals', intervalsRouter);
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint Not Found' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong! Could be something with payload?' });
});

module.exports = app;
