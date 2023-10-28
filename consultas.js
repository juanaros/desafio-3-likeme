const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '2833',
    database: 'likeme',
    allowExitOnIdle: true
});

const agregar = async (titulo, url, descripcion) => {
    let like = 0
    const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, url, descripcion, like]
    const results = await pool.query(query, values)
}

const obtener = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}

module.exports = {
    agregar,
    obtener
}