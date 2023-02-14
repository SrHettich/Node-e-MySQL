const Sequelize = require('sequelize')
//CONEXÃO  BANCO DE DADOS
const sequelize = new Sequelize('pedidos', 'root', '241214', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = 
{
    Sequelize: Sequelize,
    sequelize: sequelize
}