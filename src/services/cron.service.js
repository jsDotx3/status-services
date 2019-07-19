const cron = require('node-cron')
const crons = []
const scheduleStatus = require(`services/schedule/status.schedule`)

crons.push(
        cron.schedule('* * * * *', async () => {
            await scheduleStatus()
        }))

module.exports = crons

