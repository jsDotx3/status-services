const util = require(`util/routes.util`)
const controller = require(`http/controller/index.controller`)
const path = '/'
const router = util.parseRoutes([
            util.route('/', 'GET', controller.index),
        ],
)

module.exports = { path, router }
