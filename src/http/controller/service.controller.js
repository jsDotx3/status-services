const index = (schema) => async (req, res, next) => {
    let findAll = await schema.find()
    return res.json(findAll)
}
const show = (schema) => async (req, res, next) => {
    let show = await schema.findById(req.params.id)
    return res.json(show)
}

const create = (schema) => async (req, res, next) => {
    let create = await schema.create(req.body)
    return res.json(create)
}

module.exports = { index, create, show }
