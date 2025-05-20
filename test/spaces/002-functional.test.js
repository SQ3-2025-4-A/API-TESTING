const { environment } = require("#core/environment");
const requestManager = require("#core/requestManager");
const spacesSchema = require("#wrike/schemas/spaces");
const spacesEntity = require("#wrike/entities/spaces");

describe("Spaces Feature - Functional", () => {
    let spaceId;

    beforeAll(async () => {
        let response = await requestManager.send(
            "POST", 
            "spaces", 
            spacesEntity, 
            {
                "Authorization": `Bearer ${environment.api_key}`
            }
        );

        spaceId = response.data.data[0].id;
    });

    test("Verify that is possible to retrieve a space by ID", async () => {
        let response = await requestManager.send(
            "GET", 
            `spaces/${spaceId}`, 
            {}, 
            {
                "Authorization": `Bearer ${environment.api_key}`
            }
        );

        let validationResult = spacesSchema.validate(response.data);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty("data");
        expect(validationResult.error).toBeUndefined();
    });

    // interdependency - como corrigir?
    test("Verify that is possible to delete a space", async () => {
        let response = await requestManager.send(
            "DELETE", 
            `spaces/${spaceId}`, 
            {}, 
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
