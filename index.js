const express = require('express');


const app = express();


const connection = require('./Database/database');

const categoriaController = require("./Controller/CategoriaController");
app.use("/", categoriaController);

const produtoController = require("./Controller/ProdutoController");
app.use("/", produtoController);
// Inicie o servidor

console.log(connection);

app.listen(3000, (req, res) => {
  console.log('Servidor iniciado na porta 3000');
});