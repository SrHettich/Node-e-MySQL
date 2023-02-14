const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistema', 'root', '241214', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function()
{
    console.log('OK!')
}).catch(function(erro)
{
    console.log('Falha ao se conectar: '+erro)
})

const Postagem = sequelize.define('posts',
{
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.create({
    //titulo: 'Banana',
    //conteudo: 'Banana é uma fruta gostosa!'
//})

const Usuario = sequelize.define('usuarios',
{
    nome:
    {
        type: Sequelize.STRING
    },
    sobrenome:
    {
        type: Sequelize.STRING
    },
    idade:
    {
        type: Sequelize.INTEGER
    },
    email: 
    {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Jean Eduardo',
    sobrenome: 'Pompilho Hettich',
    idade: 18,
    email: 'jeann.hettich@gmail.com'
})