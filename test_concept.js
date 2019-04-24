const protocolService = require('./src/services/protocol.service');
protocolService.status('request', 'https://google.com')
    .then(result => {
    console.log(result);
})  .catch(error => {
    console.log(`Error ${error}`);
});
