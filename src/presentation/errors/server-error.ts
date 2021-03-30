export class ServerError extends Error {
  constructor (stack?: string) {
    super('Iternal server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
