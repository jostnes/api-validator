import * as Request from '../src/api/request'
import * as Validator from '../src/api/validator'

describe('Tests for APIs', () => {
  let request: Request.ApiRequest
  let validator: Validator.ApiValidator

  beforeAll(() => {
    request = Request.ApiRequest()
    validator = Validator.ApiValidator()
  })

  describe('Test incorrect login flows', () => {
    let incorrectLoginResponse: Response
    
    beforeEach(async () => {
      incorrectLoginResponse = await request.login('test', 'test')
    })

    test('Login with incorrect details will return error 500', () => {
      expect(incorrectLoginResponse.status).toBe(500)
    })

    test('Failed login returns correct message', () => {
      expect(incorrectLoginResponse.data.exception[0].message).toContain('Invalid Email/Password')
    })
  })

  describe('Test invalid forgot password flows', () => {
    let invalidEmailResponse: Response

    beforeEach(async () => {
      invalidEmailResponse = await request.forgotPassword('test')
    })

    test('Forgot password with invalid email will return error 401', () => {
      expect(invalidEmailResponse.status).toBe(401)
    })

    test('Failed forgot password returns correct message', () => {
      expect(invalidEmailResponse.data.message).toEqual('Email does not Exist')
    })
  })
})
