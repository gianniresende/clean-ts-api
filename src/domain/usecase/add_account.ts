import { AccountModel } from '../models/account'
export interface AddAcountModel {
  name: String
  email: String
  password: String
}
export interface AddAccount {
  add (account: AddAcountModel): Promise<AccountModel>
}
