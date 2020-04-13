export interface ApiValidator {
  validateFunction(): Promise<any>
}

export function ApiValidator(): ApiValidator {

  async function validateFunction(): Promise<any> {
  }

  return {
    validateFunction
  }
}
