// importando a dependencia
const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
// testar a conexão com  o banco de dados
sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});
 // importar a conexão
module.exports = sequelize;