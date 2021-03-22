import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('should parser body as json ', async () => {
    // criando uma rota temporária
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'rodrigo' })
      .expect({ name: 'rodrigo' })
  })
})
