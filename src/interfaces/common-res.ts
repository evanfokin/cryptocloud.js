import { ResponseStatus } from '../enums/response-status'

export interface CommonResponse {
  // Request progress status
  status: ResponseStatus
}
