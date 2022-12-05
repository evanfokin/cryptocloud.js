import { Currency } from '../enums/currency'

export interface CreateInvoiceOptions {
  // Payment amount in USD (example: 123.45)
  amount: number
  // Your internal order identifier (example: ORD99999)
  orderId?: string
  // Available currencies for conversion: USD, RUB, EUR, GBP
  currency?: Currency
  // Customer's mail (example: crypto@gmail.com)
  email?: string
}
