const Joi = require('joi');

const TaskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
});

function validateTask(req, res, next) {
    const result = TaskSchema.validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    next();
}

module.exports = {validateTask};