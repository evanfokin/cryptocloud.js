import { ResponseStatus } from '../enums/response-status'
import { StatusInvoice } from '../enums/status-invoice'

export interface CheckInvoiceStatusOptions {
  // Unique account identifier (example: INV-DZLF4212)
  uuid: string
}
