const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const AnimalController = require('./controllers/AnimalController')
const ClinicaController = require('./controllers/ClinicaController')

routes.get('/', (req, res) => res.render('index'))

routes.get('/ong', (req, res) => res.render('cadastroong'))
routes.get('/lista-ongs', OngController.lista)
routes.post('/create-ong', OngController.create)
routes.post('/delete-ong/:id', OngController.delete)

routes.get('/animal', (req, res) => res.render('cadastroanimal'))
routes.get('/lista-animais', AnimalController.lista)
routes.post('/create-animal', AnimalController.create)
routes.post('/delete-animal/:id', AnimalController.delete)

routes.get('/clinica', (req, res) => res.render('cadastroclinicas'))
routes.post('/create-clinica', ClinicaController.create)

module.exports = routes
