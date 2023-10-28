const express = require('express');
const app = express();
const cors = require('cors');
const { agregar, obtener } = require('./consultas');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.listen(PORT, console.log(`Servidor encendido y funcionando en el puerto ${PORT}`));

app.get('/posts', async (req, res) => {
    const posts = await obtener();
    res.json(posts)
})

app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregar(titulo, url, descripcion)
    res.send('Post agregado')
})