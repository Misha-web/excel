export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
    return true
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter((listener) => listener !== fn)
    }
  }
}
// Example
// const emitter = new Emitter()

// const unsub = emitter.subscribe('mekhriddin', (data) => console.log('sub', data))

// emitter.emit('mekhriddin', 42)

// setTimeout(() => {
//   emitter.emit('mekhriddin', 'after 2 seconds')
// }, 2000)

// setTimeout(() => {
//   unsub()
// }, 3000)

// setTimeout(() => {
//   emitter.emit('mekhriddin', 'after 4 seconds')
// }, 4000)
