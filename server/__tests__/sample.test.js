const request = require('supertest')
const app = require('../server')
describe('sample', () => {
    it('creates a User', async () => {
      const email = 'test@test.test'
      const password = 'test'

      // This works, need to add more to reproduce my error
      // const userResponse = await request(app)
      //   .post('/api/Users')
      //   .send({ email, password })
      // const user = userResponse.body

      // This fails
      const user = await app.models.User.create({ email, password })
      expect(user).toHaveProperty('id')

      const token = await user.createAccessToken()
    })

  })
