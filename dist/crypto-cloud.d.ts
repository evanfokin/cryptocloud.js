import { CheckInvoiceStatusOptions } from './interfaces/check-invoice-status-options';
import { CheckInvoiceStatusResponse } from './interfaces/check-invoice-status-res';
import { CreateInvoiceOptions } from './interfaces/create-invoice-options';
import { CreateInvoiceResponse } from './interfaces/create-invoice-res';
export declare class CryptoCloud {
    private apiKey;
    private shopId;
    constructor(apiKey: string, shopId: string);
    private connector;
    private createConnector;
    createInvoice(options: CreateInvoiceOptions): Promise<CreateInvoiceResponse>;
    checkInvoiceStatus(options: CheckInvoiceStatusOptions): Promise<CheckInvoiceStatusResponse>;
    private applyCase;
}
//# sourceMappingURL=crypto-cloud.d.ts.map