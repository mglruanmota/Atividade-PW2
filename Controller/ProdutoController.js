const express = require('express');

const produtoModel = require("../MODEL/produto")

const rout = express.Router();

rout.post('/produto/cadastrarProduto', (req, res) => {
    res.send('Produto cadastrado com sucesso.');
});

rout.get('/produto/listarProduto', (req, res) => {
    res.send('Produto listado com sucesso.');
});

rout.put('/produto/alterarProduto', (req, res) => {
    res.send('Produto alterado com sucesso.');
});

rout.delete('/produto/excluirProduto', (req, res) => {
    res.send('Produto excluído com sucesso.');
});

module.exports = rout;