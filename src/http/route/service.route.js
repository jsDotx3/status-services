const util = require(`util/routes.util`)
const controller = require(`http/controller/service.controller`)
const schema = require(`db/models/service.model`)
const path = '/services'

const router = util.parseRoutes([
    util.route('/', 'GET', controller.index, [], schema),
    util.route('/:id', 'GET', controller.show, [], schema),
    util.route('/', 'POST', controller.create, [], schema),
])

module.exports = { path, router }
