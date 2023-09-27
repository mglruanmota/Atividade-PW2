const sequelize = require("sequelize")

const connection = require("../Database/database")

const categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_categoria: {
            type: sequelize.STRING,
            allowNull: false,
        },

        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false,
        }
    });

categoria.sync({ force: false })

module.exports = categoria;