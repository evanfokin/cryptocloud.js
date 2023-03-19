"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoCloud = void 0;
const axios_1 = __importDefault(require("axios"));
const case_1 = require("case");
class CryptoCloud {
    constructor(apiKey, shopId) {
        this.apiKey = apiKey;
        this.shopId = shopId;
        this.connector = this.createConnector();
    }
    createConnector() {
        const connector = axios_1.default.create({
            baseURL: 'https://api.cryptocloud.plus/v1',
            headers: {
                Authorization: `Token ${this.apiKey}`,
            },
        });
        connector.interceptors.request.use(config => {
            this.applyCase(config.params, 'snake');
            this.applyCase(config.data, 'snake');
            return config;
        }, error => Promise.reject(error));
        connector.interceptors.response.use(response => {
            this.applyCase(response.data, 'camel');
            return response;
        }, error => Promise.reject(error));
        return connector;
    }
    createInvoice(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connector
                .post('/invoice/create', Object.assign(Object.assign({}, options), { shopId: this.shopId }))
                .then(res => res.data);
        });
    }
    checkInvoiceStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.uuid.match(/^INV-/) === null) {
                options.uuid = `INV-${options.uuid}`;
            }
            return this.connector.get('/invoice/info', { params: options }).then(res => res.data);
        });
    }
    applyCase(obj, _case) {
        const isObject = obj !== null && typeof obj === 'object';
        if (isObject === false) {
            return;
        }
        Object.keys(obj).forEach(param => {
            const cased = (_case === 'snake' ? case_1.snake : case_1.camel)(param);
            if (cased === param)
                return;
            obj[cased] = obj[param];
            delete obj[param];
        });
    }
}
exports.CryptoCloud = CryptoCloud;
//# sourceMappingURL=crypto-cloud.js.map