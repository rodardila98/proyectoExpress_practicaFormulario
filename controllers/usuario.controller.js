const usuarioService = require('../services/usuario.service');

// GET - Obtener todos los usuarios
exports.getAll = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET - Obtener un usuario por ID
exports.getById = async (req, res) => {
    try {
        const usuario = await usuarioService.getById(req.params.id);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST - Crear un usuario (nombre, apellido, documento, edad)
exports.create = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar un usuario por ID
exports.update = async (req, res) => {
    try {
        await usuarioService.update(req.params.id, req.body);
        res.json({ mensaje: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE - Eliminar un usuario por ID
exports.delete = async (req, res) => {
    try {
        await usuarioService.delete(req.params.id);
        res.json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};