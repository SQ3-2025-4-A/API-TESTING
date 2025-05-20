const axios = require("axios");
const { environment, configuration } = require("#core/environment");
const logger = require("#core/logger");

class RequestManager {
    constructor(baseURL, headers={}, timeout=configuration.timeout) {
        if (RequestManager._instance) { 
            return RequestManager._instance 
        };
        RequestManager._instance = this;

        this.axios = axios.create({
            baseURL,
            headers,
            timeout
        });
    }

    async send(method, endpoint, params, headers){
        logger.info(`Send ${method.toUpperCase()} request to ${this.axios.defaults.baseURL + endpoint}`);
        if (params) logger.debug(`Request params: ${JSON.stringify(params)}`);
        if (headers) logger.debug(`Request headers: ${JSON.stringify(headers)}`);

        const response = await this.axios.request({
            method: method,
            url: endpoint,
            data: params,
            headers: headers
        });
        logger.info(`Request response data: ${JSON.stringify(response.data)}`);
        return response
    }
}

module.exports = new RequestManager(
    environment.base_url
);