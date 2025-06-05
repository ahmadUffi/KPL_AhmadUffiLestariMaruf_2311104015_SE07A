const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mahasiswa = require('./mahasiswa');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 5000; 

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/mahasiswa', (req, res) => {
    res.json(mahasiswa);
});

app.get('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= mahasiswa.length) {
        res.status(404).send('Mahasiswa tidak ditemukan');
    } else {
        res.json(mahasiswa[index]);
    }
});

app.post('/api/mahasiswa', (req, res) => {
    const { nama, nim } = req.body;
    mahasiswa.push({ nama, nim });
    res.status(201).send('Mahasiswa berhasil ditambahkan');
});

app.delete('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= mahasiswa.length) {
        res.status(404).send('Mahasiswa tidak ditemukan');
    } else {
        mahasiswa.splice(index, 1);
        res.send('Mahasiswa berhasil dihapus');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Swagger UI: http://localhost:${port}/api-docs`);
});
