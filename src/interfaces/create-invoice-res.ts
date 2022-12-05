import { CryptoCurrency } from '../enums/crypto-currency'
import { CommonResponse } from './common-res'

export interface CreateInvoiceResponse extends CommonResponse {
  // Currency code (example: BTC)
  currency: CryptoCurrency
  // Payment amount in crypto (example: 123.45)
  amount: number
  // Link to payment page (example: https://pay.cryptocloud.plus/DZLF4212)
  payUrl: string
  // Unique payment identifier (example: DZLF4212)
  invoiceId: string
  // Payment amount in USD (example: 123.45)
  amountUsd: number
}
