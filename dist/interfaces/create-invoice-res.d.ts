import { CryptoCurrency } from '../enums/crypto-currency';
import { CommonResponse } from './common-res';
export interface CreateInvoiceResponse extends CommonResponse {
    currency: CryptoCurrency;
    amount: number;
    payUrl: string;
    invoiceId: string;
    amountUsd: number;
}
//# sourceMappingURL=create-invoice-res.d.ts.map