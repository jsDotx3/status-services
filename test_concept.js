const protocolService = require('./src/services/protocol.service');
protocolService.status('tcp', '127.0.0.1:3306', '')
    .then(result => {
    console.log(result);
})  .catch(error => {
    console.log(`Error ${error}`);
});
