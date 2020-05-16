import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamErro } from '../errors/missing_param_error'
import { badRequest } from '../helpers/http_helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamErro(field))
      }
    }
  }
}
