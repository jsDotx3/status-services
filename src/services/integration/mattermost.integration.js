const protocolService = require(`services/protocol.service`)
const request = require('request-promise')
const options = {
    uri: process.env.MATTERMOST_WEBHOOK,
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST',
    json: true,
}
const sendMessage = async (text) => {
    options.body = { text }
    try {
        if (!options.resolveWithFullResponse)
            options.resolveWithFullResponse = true

        const response = request(options)
        return /^2/.test('' + response.statusCode)
    } catch (e) {
        return false
    }
}
const buildMessageService = async (services, time) => {
    let text = '| Servicio  | URL  | Estado | Fecha Actualización\n' +
            '| :------------ |:---------------:| -----:|\n'

    for (let service of services) {
        const { name, url, protocol } = service
        const result = await protocolService.status(protocol, url)
        text += `| ${name} | ${url} | :status: | ${time}\n`
        text = text.replace(':status:', result ? ':white_check_mark: online' : ':x: offline')
    }
    return text
}

module.exports = { sendMessage, buildMessageService }

