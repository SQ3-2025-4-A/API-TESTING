require("dotenv").config();
const joi = require("joi");
const requestManager = require("./requestManager");

describe("Wrike API Tests", () => {
    describe("Spaces", () => {
        test("Verify that is possible to retrieve a list of spaces", async () => {
            let response = await requestManager.send(
                "GET", 
                "spaces", 
                {}, 
                {
                    "Authorization": `Bearer ${process.env.WRIKE_TOKEN}`
                }
            );

            expect(response.status).toBe(201);
            expect(response.data).toHaveProperty("data");
            expect(response.data.data).toBeInstanceOf(Array);
        })
    })
});
