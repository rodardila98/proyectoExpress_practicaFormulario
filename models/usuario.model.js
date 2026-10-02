const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM usuarios', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
};

exports.create = (usuario, callback) => {
    db.query(
        'INSERT INTO usuarios (nombre, apellido, documento, edad) VALUES (?, ?, ?, ?)',
        [usuario.nombre, usuario.apellido, usuario.documento, usuario.edad],
        callback
    );
};

exports.update = (id, usuario, callback) => {
    db.query(
        'UPDATE usuarios SET nombre=?, apellido=?, documento=?, edad=? WHERE id=?',
        [usuario.nombre, usuario.apellido, usuario.documento, usuario.edad, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
};