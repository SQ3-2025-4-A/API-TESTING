const axios = require('axios');
const logger = require('#core/logger');

const BASE_URL = 'http://test.com/';
const TIMEOUT = 1234

jest.mock('axios');
jest.mock('#core/logger');
jest.mock('#core/environment', () => ({
    environment: { base_url: BASE_URL },
    configuration: { timeout: TIMEOUT }
}));

describe('RequestManager', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        delete require.cache[require.resolve('#core/requestManager')];        
        const RequestManager = require('#core/requestManager').constructor;
        RequestManager._instance = undefined;
    });

    it('should be a singleton', () => {
        const iRequestManager1 = require('#core/requestManager');
        const iRequestManager2 = require('#core/requestManager');

        expect(iRequestManager1).toBe(iRequestManager2);
    });

    it('should create axios instance with correct config', () => {
        const axiosSpy = jest.spyOn(axios, 'create').mockReturnValue({
            defaults: {
                base_url: BASE_URL,
                timeout: TIMEOUT,
                headers: {}
            }
        });
        
        const iRequestManager = new (require('#core/requestManager').constructor)(BASE_URL, { token: 'abc' }, 5000);

        expect(axiosSpy).toHaveBeenCalled();
        expect(iRequestManager.axios.defaults.base_url).toBe(BASE_URL);
        expect(iRequestManager.axios.defaults.timeout).toBe(TIMEOUT);
        expect(typeof iRequestManager.axios.defaults.headers).toBe('object');
    });

    it('should send request and log info/debug', async () => {
        const mockAxiosInstance = { 
            request: jest.fn().mockResolvedValue({ data: { foo: 'bar' } }), 
            defaults: { baseURL: BASE_URL } 
        };
        axios.create.mockReturnValue(mockAxiosInstance);

        const iRequestManager = new (require('#core/requestManager').constructor)(BASE_URL, { token: 'abc' }, 5000);
        const params = { a: 1 };
        const headers = { b: 2 };
        const method = 'post';
        const endpoint = '/api';
        const response = await iRequestManager.send(method, endpoint, params, headers);

        expect(mockAxiosInstance.request).toHaveBeenCalledWith({
            method,
            url: endpoint,
            data: params,
            headers
        });
        expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Send POST request'));
        expect(logger.debug).toHaveBeenCalledWith(expect.stringContaining('Request params'));
        expect(logger.debug).toHaveBeenCalledWith(expect.stringContaining('Request headers'));
        expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Request response data'));
        expect(response.data).toEqual({ foo: 'bar' });
    });

    it('should work if params and headers are undefined', async () => {
        const mockAxiosInstance = { 
            request: jest.fn().mockResolvedValue({ data: 42 }), 
            defaults: { baseURL: BASE_URL } 
        };
        axios.create.mockReturnValue(mockAxiosInstance);

        const iRequestManager = new (require('#core/requestManager').constructor)(BASE_URL);
        const response = await iRequestManager.send('get', '/api');

        expect(mockAxiosInstance.request).toHaveBeenCalledWith({
            method: 'get',
            url: '/api',
            data: undefined,
            headers: undefined
        });
        expect(response.data).toBe(42);
    });
});