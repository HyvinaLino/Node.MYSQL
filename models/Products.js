// importando a dependência sequelize
const Sequelize = require('sequelize');

const db = require('./db');
// criando a tabela products
const Products = db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
// Verifica se existe a tabela se não existir cria a tabela
Products.sync();

module.exports = Products;