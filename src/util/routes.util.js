const router = require('express').Router();

const parseRoutes = (...routes) => {
    routes.map((route) => router[route.method.toLowerCase()](route.path, [], route.controller));
    return router;
};

const build = (path, method, controller, middlewares = []) => {
    return {path, method, controller, middlewares};
};

module.exports = {parseRoutes, build};