interface Response {
  data: {
    data: string,
    error_code: string
    message: string
    response: number
    exception: [{
      code: number,
      file: string,
      line: number,
      message: string
      trace: any
      type: string
    }]
  },
  message: string
}
