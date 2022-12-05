import { StatusInvoice } from '../enums/status-invoice'
import { CommonResponse } from './common-res'

export interface CheckInvoiceStatusResponse extends CommonResponse {
  // Invoice status
  statusInvoice: StatusInvoice
  // Error text
  error?: string
}
