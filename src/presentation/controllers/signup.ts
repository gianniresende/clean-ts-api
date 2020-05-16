import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamErro } from '../errors/missing_param_error'
import { badRequest } from '../helpers/http_helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamErro('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamErro('email'))
    }
  }
}
