import { AddAccountRepository } from '../../../../data/protocols/add_account_reporsitory'
import { AddAcountModel } from '../../../../domain/usecase/add_account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo_helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAcountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = result.ops[0]
    const { _id, ...accountWithoutID } = account
    return Object.assign({}, accountWithoutID, { id: _id })
  }
}
