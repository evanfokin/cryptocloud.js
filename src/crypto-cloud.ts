import axios, { AxiosInstance } from 'axios'
import { snake, camel } from 'case'

import { CheckInvoiceStatusOptions } from './interfaces/check-invoice-status-options'
import { CheckInvoiceStatusResponse } from './interfaces/check-invoice-status-res'
import { CreateInvoiceOptions } from './interfaces/create-invoice-options'
import { CreateInvoiceResponse } from './interfaces/create-invoice-res'

export class CryptoCloud {
  constructor(private apiKey: string, private shopId: string) {
    this.connector = this.createConnector()
  }

  private connector: AxiosInstance

  private createConnector(): AxiosInstance {
    const connector = axios.create({
      baseURL: 'https://api.cryptocloud.plus/v1',
      headers: {
        Authorization: `Token ${this.apiKey}`,
      },
    })

    connector.interceptors.request.use(
      config => {
        this.applyCase(config.params, 'snake')
        this.applyCase(config.data, 'snake')

        return config
      },
      error => Promise.reject(error),
    )

    connector.interceptors.response.use(
      response => {
        this.applyCase(response.data, 'camel')
        return response
      },
      error => Promise.reject(error),
    )

    return connector
  }

  public async createInvoice(options: CreateInvoiceOptions): Promise<CreateInvoiceResponse> {
    return this.connector
      .post<CreateInvoiceResponse>('/invoice/create', { ...options, shopId: this.shopId })
      .then(res => res.data)
  }

  public async checkInvoiceStatus(options: CheckInvoiceStatusOptions): Promise<CheckInvoiceStatusResponse> {
    if (options.uuid.match(/^INV-/) === null) {
      options.uuid = `INV-${options.uuid}`
    }

    return this.connector.get<CheckInvoiceStatusResponse>('/invoice/info', { params: options }).then(res => res.data)
  }

  private applyCase(obj: any, _case: 'snake' | 'camel'): void {
    const isObject = obj !== null && typeof obj === 'object'

    if (isObject === false) {
      return
    }

    Object.keys(obj).forEach(param => {
      const cased = (_case === 'snake' ? snake : camel)(param)
      if (cased === param) return
      obj[cased] = obj[param]
      delete obj[param]
    })
  }
}
