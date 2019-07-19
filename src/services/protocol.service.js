let services = {
    ping: require('services/protocol/ping.protocol'),
    tcp: require('services/protocol/tcp.protocol'),
    request: require(`services/protocol/request.protocol`),
}

let resolveService = (service) => {
    for (let serviceIterator in services) {
        if (services[serviceIterator].support(service))
            return services[serviceIterator]
    }
}

const status = async (service, host, options) => {
    let serviceProtocol = resolveService(service)

    if (undefined === serviceProtocol)
        throw new Error(`Protocol is not support`)

    return await serviceProtocol.status(host, options)
}

module.exports = { status }
