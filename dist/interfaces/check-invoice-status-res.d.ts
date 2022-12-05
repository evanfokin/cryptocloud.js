import { StatusInvoice } from '../enums/status-invoice';
import { CommonResponse } from './common-res';
export interface CheckInvoiceStatusResponse extends CommonResponse {
    statusInvoice: StatusInvoice;
    error?: string;
}
//# sourceMappingURL=check-invoice-status-res.d.ts.map