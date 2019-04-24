const protocol = require('tcp-port-used');

const resolveHostAndPort = (hostParameter) => {
    if(hostParameter.constructor !== String)
        throw new Error(`Parameter hostParameter is not String`);

    let split = hostParameter.split(':');

    if(split.length !== 2)
        throw new Error(`Format hostName is hostname:port (ex. localhost:3306)`);

    let port = parseInt(split.pop());
    let hostname = split.shift();
    return {port, hostname};
};

const status = async (hostParameter, options) => {
    let hostPort = resolveHostAndPort(hostParameter);
    try {
        return await protocol.check(hostPort.port, hostPort.host);
    } catch (e) {
        return false;
    }
};
const support = (protocol) => protocol === 'tcp';

module.exports = {status, support};