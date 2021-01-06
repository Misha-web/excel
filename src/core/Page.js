export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('Methood "getRoot" should be implemented')
  }

  afterRender() {}

  destroy() {}
}
