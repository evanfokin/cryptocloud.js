import {
  CheckInvoiceStatusOptions,
  CreateInvoiceOptions,
  CryptoCloud,
  Currency,
  ResponseStatus,
  StatusInvoice,
} from '../src/index'

describe('Crypto Cloud class tests', () => {
  function createInstance() {
    return new CryptoCloud(process.env.API_KEY as string, process.env.SHOP_ID as string)
  }

  test('Instance successfully created', () => {
    expect(createInstance()).toBeInstanceOf(CryptoCloud)
  })

  describe('Invoice creation', () => {
    async function createInvoice(options: CreateInvoiceOptions) {
      const cc = createInstance()
      return cc.createInvoice(options)
    }

    async function checkInvoice(options: CheckInvoiceStatusOptions) {
      const cc = createInstance()
      return cc.checkInvoiceStatus(options)
    }

    test('Invoice created', async () => {
      const amount = 100
      const invoice = await createInvoice({ amount })
      expect(invoice.status).toBe(ResponseStatus.SUCCESS)

      const checkResult = await checkInvoice({ uuid: invoice.invoiceId })
      expect(checkResult.status).toBe(ResponseStatus.SUCCESS)
      expect(checkResult.statusInvoice).toBe(StatusInvoice.CREATED)
    })

    test('Invoice USD amounts are equal', async () => {
      const amount = 100
      const invoice = await createInvoice({ amount, currency: Currency.USD })
      expect(invoice.amountUsd).toBe(amount)
    })
  })
})
