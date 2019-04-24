const protocol = require('ping');

const status = async (host, options = {}) => {
    try {
        let response = await protocol.promise.probe(host,options);
        return response.alive;
    } catch (e) {
        return false;
    }
};

const support = (service) => service === 'ping';
module.exports = {status, support};