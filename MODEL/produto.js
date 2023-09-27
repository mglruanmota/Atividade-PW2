const sequelize = require("sequelize")

const connection = require("../Database/database")

const produto = connection.define(
    'tbl_produto',

    {


        codigo_produto: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_produto: {
            type: sequelize.STRING,
            allowNull: false,
        },
        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
            allowNull: false,
        },
        imagem_produto: {
            type: sequelize.STRING,
            allowNull: false,
        },
        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false,
        },
    });

produto.sync({ force: false })


module.exports = produto;