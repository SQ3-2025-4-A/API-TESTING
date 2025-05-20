const joi = require("joi");

const spacesSchema = joi.object({
    kind: joi.string().valid("spaces").required(),
    data: joi.array().items(
        joi.object({
            id: joi.string().required(),
            title: joi.string().required(),
            avatarUrl: joi.string().uri().required(),
            accessType: joi.string().valid("Public", "Personal").required(),
            archived: joi.boolean().required(),
            guestRoleId: joi.string(), //opcional
            defaultProjectWorkflowId: joi.string(),
            defaultTaskWorkflowId: joi.string() 
        })
    ).required()
});

module.exports = spacesSchema;