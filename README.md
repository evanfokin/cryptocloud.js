# Cryptocloud.js
Wrapper for working with cryptocloud.plus
## Installation
Install with npm:
```sh
npm install cryptocloud
```
Install with yarn:
```sh
yarn add cryptocloud
```

## Usage
### TypeScript
```ts
import { CryptoCloud, Currency, StatusInvoice } from 'cryptocloud'

const cryptoCloud = new CryptoCloud('apiKey', 'shopId')

/** Invoice creation */
const invoice = await cryptoCloud.createInvoice({
  amount: 100,
  orderId: 'myOrderId',
  currency: Currency.USD,
  email: 'customer@gmail.com'
})

/** Checking invoice status */
const status = await cryptoCloud.checkInvoiceStatus({ uuid: invoice.invoiceId })
if (status.statusInvoice === StatusInvoice.CREATED) {
  // ...
}
```

### JavaScript
```js
import { CryptoCloud } from 'cryptocloud'

const cryptoCloud = new CryptoCloud('apiKey', 'shopId')

/** Invoice creation */
const invoice = await cryptoCloud.createInvoice({
  amount: 100,
  orderId: 'myOrderId',
  currency: 'USD',
  email: 'customer@gmail.com'
})

/** Checking invoice status */
const status = await cryptoCloud.checkInvoiceStatus({ uuid: invoice.invoiceId })
if (status.statusInvoice === 'created') {
  // ...
}
```
