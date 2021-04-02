import { MongoHelper } from './../mongodb/helpers/mongo-helper'
import { LogErrorRepository } from './../../../data/protocols/log-error-repository'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('erros')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
