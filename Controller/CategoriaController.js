const express = require('express');

const categoriaModel = require("../MODEL/categoria")

const rout = express.Router();

rout.post('/categoria/cadastrarCategoria', (req, res) => {
    res.send('With sucess, category has been maded')
});

rout.get('/categoria/listarCategoria', (req, res) => {
    res.send('Successuffuly has been listed');
});

rout.put('/categoria/alterarCategoria', (req, res) => {
    res.send('With sucess, category has been changed');
});

rout.delete('/categoria/excluirCategoria', (req, res) => {
    res.send('Deleted with sucess');
});

module.exports = rout;

