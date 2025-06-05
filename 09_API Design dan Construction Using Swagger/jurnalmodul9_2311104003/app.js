const express = require('express');
const swaggerUi = require('swagger-ui-express');
const movies = require('./movies');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET /api/Movies
app.get('/api/Movies', (req, res) => {
    res.json(movies);
});

// GET /api/Movies/:id
app.get('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= movies.length) {
        res.status(404).send('Movie tidak ditemukan');
    } else {
        res.json(movies[id]);
    }
});

// POST /api/Movies
app.post('/api/Movies', (req, res) => {
    const { title, director, stars, description } = req.body;
    movies.push({ title, director, stars, description });
    res.status(201).send('Movie berhasil ditambahkan');
});

// DELETE /api/Movies/:id
app.delete('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= movies.length) {
        res.status(404).send('Movie tidak ditemukan');
    } else {
        movies.splice(id, 1);
        res.send('Movie berhasil dihapus');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Swagger UI: http://localhost:${port}/api-docs`);
});
