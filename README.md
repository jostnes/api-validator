## API Validator
Simple test framework to test REST APIs

## How to test locally
1. Use node v14.17.1
2. Run `yarn` on terminal
3. Create .env file, copy variables in .env.example and replace the values with the correct addresses
4. Run `yarn test` on terminal

## Example test runs
```
➜  api-validator git:(master) ✗ npm test

> api-validator@1.0.0 test /Users/jos/code/api-validator
> jest

 PASS  test/login.test.ts
  Tests for APIs
    Test incorrect login flows
      ✓ Login with incorrect details will return error 500 (165ms)
      ✓ Failed login returns correct message (59ms)
    Test invalid forgot password flows
      ✓ Forgot password with invalid email will return error 401 (76ms)
      ✓ Failed forgot password returns correct message (39ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.439s, estimated 5s
Ran all test suites.
```
