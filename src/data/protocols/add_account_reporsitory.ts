import { AddAcountModel } from '../../domain/usecase/add_account'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAcountModel): Promise<AccountModel>
}
