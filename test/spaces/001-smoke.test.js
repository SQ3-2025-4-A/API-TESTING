const { environment } = require("#core/environment");
const requestManager = require("#core/requestManager");
const spacesSchema = require("#wrike/schemas/spaces");
const spacesEntity = require("#wrike/entities/spaces");

describe("Spaces Feature - Smoke", () => {
    test("Verify that is possible to retrieve a list of spaces", async () => {
        let response = await requestManager.send(
            "GET", 
            "spaces", 
            {}, 
            {
                "Authorization": `Bearer ${environment.api_key}`
            }
        );

        let validationResult = spacesSchema.validate(response.data);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty("data");
        expect(response.data.data).toBeInstanceOf(Array);
        expect(validationResult.error).toBeUndefined();
    });

    test("Verify that is possible to create a space", async () => {
        let response = await requestManager.send(
            "POST", 
            "spaces", 
            spacesEntity, 
            {
                "Authorization": `Bearer ${environment.api_key}`
            }
        );

        let validationResult = spacesSchema.validate(response.data);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty("data");
        expect(validationResult.error).toBeUndefined();
    });
});