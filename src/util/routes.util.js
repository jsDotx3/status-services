const route = (path, method, controller, middlewares = [], model) => {
    if (model !== undefined)
        controller = controller(model)

    return {
        method,
        path,
        middlewares,
        controller,
    }
}

const parseRoutes = (routes, options = {}) => {
    const router = require('express').Router()
    if (options.middlewares)
        router.use(options.middlewares)

    routes.forEach(route => {
        return router[route.method.toLowerCase()](route.path,
                route.middlewares || [],
                route.controller)

    })

    return router
}

module.exports = { parseRoutes, route }
