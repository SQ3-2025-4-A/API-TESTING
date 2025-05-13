## Description 
API Testing Framework for Software Quality Engineering 3 - Jala University Brazil.

**Cohort**: Section A - 2025/1

**Practitioner**: Rubiana Perucci


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
- **Newman HTML Reporter** to execute and generate report for _Postman_ collections.


## References
- [Jest](https://jestjs.io/docs/getting-started)
- [Axios (npm)](https://www.npmjs.com/package/axios)
- [Joi](https://joi.dev/api/?v=17.13.3)
- [Newman (npm)](https://www.npmjs.com/package/newman)
- [Newman HTML Reporter (github)](https://github.com/postmanlabs/newman-reporter-html)
