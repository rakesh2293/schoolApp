const Joi = require("@hapi/joi");

const schema = Joi.object({
    user_name: Joi.string().required(),
    email_id: Joi.string().required(),
    password:Joi.string().required(),
    createdBy:Joi.string().required(),
    updatedBy:Joi.string().required(),
    createdDate:Joi.string().required(),
    updatedDate:Joi.string().required()
}).unknown(true);

module.exports = schema;