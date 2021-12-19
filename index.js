const express = require('express')
const app = express()

const db = require('./config/db')
const consign = require ('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000,()=>{
    console.log('Backend executando...')
})

// const bodyParser = require('body-parser')

// //app.use é chamada em todas as requisições e o body-parser é o que interpreta o body no post
// app.use(bodyParser.json())

// app.get('/',(req, res, next)=>{
    
//     console.log('teste')
//     next()
// })

// app.get('/',(req, res)=>{
//     res.status(200).send('Meu backend')
// })
// // Capturando por parametro
// app.get('/teste/:nome',(req, res)=>{
//     let nome = req.params.nome
//     res.status(200).send(`Meu nome é ${nome}`)
// })

// //Capturando por querystring
// app.get('/teste2',(req, res)=>{
//     //http://localhost:3000/teste?nome=João&sobrenome=Silva
//     let nome = req.query.nome
//     let sobrenome = req.query.sobrenome
//     res.status(200).send(`Meu nome é ${nome} ${sobrenome}`)
// })

// //Capturando do post
// app.post('/teste3',(req, res)=>{
//     //http://localhost:3000/teste?nome=João&sobrenome=Silva
//     let nome = req.body.nome
//     let sobrenome = req.body.sobrenome
//     res.status(200).send(`Meu nome é ${nome} ${sobrenome}`)
// })