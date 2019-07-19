const protocol = require('request-promise')

const status = async (host, options = {}) => {
    try {
        if (!options.resolveWithFullResponse)
            options.resolveWithFullResponse = true

        let response = await protocol(host, options)
        return /^2/.test('' + response.statusCode)
    } catch (e) {
        return false
    }
}

const support = (service) => service === 'request'
module.exports = { status, support }
