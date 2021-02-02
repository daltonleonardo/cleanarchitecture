export class ServerError extends Error {
  constructor () {
    super('Iternal server error')
    this.name = 'ServerError'
  }
}
