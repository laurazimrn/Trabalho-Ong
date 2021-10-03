const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')

routes.get('/', (req, res) => res.render('index'))

routes.get('/ong', (req, res) => res.render('cadastroong'))
routes.post('/create-ong', OngController.create)

routes.get('/animal', (req, res) => res.render('cadastroanimal'))

routes.get('/pessoal', (req, res) => res.render('cadastropessoas'))

module.exports = routes
