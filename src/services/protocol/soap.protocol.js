const status = async (host, options = {}) => {
    await console.log("Entro");
};
const support = (service) => service === 'soap';
module.exports = {status, support};