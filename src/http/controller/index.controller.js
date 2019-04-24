const index = async (req, res, next) => {
    res.json({status: "Welcome Status Services API"});
};

module.exports = {index};