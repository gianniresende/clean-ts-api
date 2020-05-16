import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamErro } from '../errors/missing_param_error'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamErro('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamErro('email')
      }
    }
  }
}
