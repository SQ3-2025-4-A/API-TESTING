require("dotenv").config();
const joi = require("joi");
const requestManager = require("./requestManager");

describe("Wrike API Tests", () => {
    describe("Spaces", () => {
        test("Verify that is possible to retrieve a list of spaces", async () => {
            const schema = joi.object({
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

            let response = await requestManager.send(
                "GET", 
                "spaces", 
                {}, 
                {
                    "Authorization": `Bearer ${process.env.WRIKE_TOKEN}`
                }
            );

            let validationResult = schema.validate(response.data);

            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty("data");
            expect(response.data.data).toBeInstanceOf(Array);
            expect(validationResult.error).toBeUndefined();
        })
    })
});
