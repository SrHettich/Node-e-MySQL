const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const Pedido = require('./models/Pedido')

//CONFIGURANDO HANDLEBARS
//DEFININDO PARA O NODE QUE QUEREMOS USAR O HANDLEBARS COMO TEMPLATE ENGINE
app.engine('handlebars', engine ({defaultLayout: 'main',
runtimeOptions: {
          allowProtoPropertiesByDefault: true,
    
          allowProtoMethodsByDefault: true,
        }}))
app.set('view engine', 'handlebars')

//body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//ROTAS

app.get('/', function(req, res)
{
    Pedido.findAll({order: [['id', 'DESC']]}).then(function(pedidos)
    {
        res.render('home', {pedidos: pedidos})
    })
    
})


app.get('/cad', function(req, res)
{
    res.render('form')
})

//Rota post
app.post('/pedidos', function(req, res)
{
    Pedido.create(
        {
            cliente: req.body.cliente,
            pedido: req.body.pedido,
            description: req.body.description,
            quantidade: req.body.quant
        }).then(function()
        {
            res.redirect('/')
        }).catch(function(erro)
        {
            res.send('Houve um erro: ' + erro)
        })
        
})

app.get('/deletar/:id', function(req, res)
{
    Pedido.destroy({where: {'id': req.params.id}}).then(function()
{
    res.redirect('/')
}).catch(function(erro)
{
    res.send('Houve um erro')
})
    
})

app.listen(3000, function(){
    console.log('Tudo certo!')
})