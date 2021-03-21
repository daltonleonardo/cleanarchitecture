import { MongoHelper } from './../mongo-helper'
import { AddAccountRepository } from './../../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../../domain/usecases/add-account'
import { AccountModel } from './../../../../../domain/model/account'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = result.ops[0]
    const { _id, ...accountWithoutId } = account

    // return await new Promise(resolve => resolve(Object({}, accountWithoutId, { id: _id }) as AccountModel))
    return Object.assign({}, accountWithoutId, { id: _id })
    // await new Promise(resolve => resolve(null as unknown as AccountModel))
  }
}
