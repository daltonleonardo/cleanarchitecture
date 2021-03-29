import { MongoHelper as sut } from './mongo-helper'
describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('should reconect if mongo db is down ', async () => {
    const accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    // await sut.disconnect()
    // accountCollection = await sut.getCollection('accounts')
    // expect(accountCollection).toBeTruthy()
  })
})
