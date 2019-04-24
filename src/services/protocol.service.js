let services = {
    soap: require(`services/protocol/soap.protocol`),
    ping: require(`services/protocol/ping.protocol`),
    curl: require(`services/protocol/curl.protocol`),
    tcp: require(`services/protocol/tcp.protocol`),
};

let resolveService = (service) => {
    for (serviceIterator in services) {
        if(services[serviceIterator].support(service))
            return services[serviceIterator];
    }
};

const status = async (service, host, options) => {
    let serviceProtocol = resolveService(service);
    return await serviceProtocol.status(host, options);
};

module.exports = {status};