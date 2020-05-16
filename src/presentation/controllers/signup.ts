import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamErro } from '../errors/missing_param_error'
import { badRequest } from '../helpers/http_helper'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamErro(field))
      }
    }
  }
}
