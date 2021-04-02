import { LogMongoRepository } from './log'
import { Collection } from 'mongodb'
import { MongoHelper } from '../mongodb/helpers/mongo-helper'

const makeSut = (): LogMongoRepository => {
    return new LogMongoRepository()
}
describe('Log Mongo Repository', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('erros')
    // parametro {}, vzio apaga tudo
    await errorCollection.deleteMany({})
  })

  test('Should create an error log an', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
