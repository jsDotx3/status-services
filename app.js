require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const indexRoute = require(`./src/http/route/index`)
const serviceRoute = require(`./src/http/route/service.route`)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(indexRoute.path, indexRoute.router)
app.use(serviceRoute.path, serviceRoute.router)
module.exports = app
