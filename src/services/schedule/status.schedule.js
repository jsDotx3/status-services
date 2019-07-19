const schema = require(`db/models/service.model`)
const matterMost = require(`services/integration/mattermost.integration`)
const scheduleStatus = async () => {
    let findAll = await schema.find()
    const time = Date(Date.now()).toString()
    let text = await matterMost.buildMessageService(findAll, time)
    await matterMost.sendMessage(text)
}

module.exports = scheduleStatus
