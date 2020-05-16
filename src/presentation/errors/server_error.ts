export class ServerError extends Error {
  constructor () {
    super('Erro inesperado tente mais tarde')
    this.name = 'ServerError'
  }
}
