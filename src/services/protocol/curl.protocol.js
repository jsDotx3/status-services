const protocol = require('curl');

const status = async (host, options = {}) => {
    let method = options.method || 'get';
    try {
        let response = protocol[method](host, options);
        console.log(response);
        return true;
    } catch (e) {
        return false;
    }
};

const support = (service) => service === 'curl';
module.exports = {status, support};