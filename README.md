## Description 
API Testing Framework for Software Quality Engineering 3 - Jala University Brazil.

**Cohort**: Section A - 2025/1

**Practitioner**: Rubiana Perucci

## Architecture
This framework is built using the Three-Layered Archictecture.
- Test layer: runnable tests.
- Business layer: application dependent libraries, data, and configuration.
- Core layer: product independent libraries - expandable modules related to the framework logic. 

## Structure
```
.
|-- README.md
|-- config.json
|-- core
|   |-- environment.js
|   |-- jest.setup.js
|   |-- logger.js
|   `-- requestManager.js
|-- env.json
|-- jest.config.js
|-- package-lock.json
|-- package.json
|-- structure.txt
|-- test
|   |-- newman
|   |   |-- WRIKE.postman_collection.json
|   |   `-- newman_reporter.js
|   |-- spaces
|   |   |-- 001-smoke.test.js
|   |   `-- 002-functional.test.js
|   `-- users
|       |-- functional
|       `-- smoke
`-- wrike
    |-- entities
    |   `-- spaces.js
    `-- schemas
        `-- spaces.js
```

## Usage
1. Clone the repo
2. Install dependencies:
    ```console
    npm install
    ```

3. To execute the scripts

   a. Newman Reporter:
   
    ```console
    npm run newman
    ```

   b. Jest tests:
      
    ```console
    npm test    
    ```
    

## Framework Stack
- **Jest** as Test Runner
- **Axios** to execute HTTP requests
- **Joi** as schema validator
- **Winston** as logger
- **jest-html-reports** NPM lib to generate the HMTL report from Jest tests
- **Newman HTML Reporter** to execute and generate report for _Postman_ collections



## References
- [Jest](https://jestjs.io/docs/getting-started)
- [Axios (npm)](https://www.npmjs.com/package/axios)
- [Joi](https://joi.dev/api/?v=17.13.3)
- [Newman (npm)](https://www.npmjs.com/package/newman)
- [Newman HTML Reporter (github)](https://github.com/postmanlabs/newman-reporter-html)
- [Tri-Layer Architecture - Péter Földházi](https://www.pnsqc.org/docs/PROP53522057-FoldhaziDraftFinal.pdf)
