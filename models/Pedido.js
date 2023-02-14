const db = require('./db')

const Pedido = db.sequelize.define('pedidos',
{
    cliente:
    {
        type: db.Sequelize.STRING
    },
    pedido: {
        type: db.Sequelize.STRING
    },
    description: 
    {
        type: db.Sequelize.TEXT
    },
    quantidade:
    {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Pedido