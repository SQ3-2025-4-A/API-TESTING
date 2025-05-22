const { configuration, environment } = require("#core/environment");
const logger = require("#core/logger");

beforeAll(async() => {
    logger.info("Started tests");
    logger.info(`Base URL: ${environment.base_url}
        Environment UAT: ${configuration.environment} 
        Timeout Set: ${configuration.timeout}`
    );
});

afterAll(async() => {
    logger.info("Finished tests");
});

jest.setTimeout(configuration.timeout);