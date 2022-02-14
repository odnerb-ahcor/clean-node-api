import { httpRequest, httpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
