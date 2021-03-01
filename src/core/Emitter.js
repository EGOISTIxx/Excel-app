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
      this.listeners[event] =
          this.listeners[event].filter((listener) => listener !== fn)
    }
  }
}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('Show message',
//         (data) => console.log('Sub', data))

// emitter.emit('Show message', 42)
// emitter.emit('Show message', 42)
// emitter.emit('Show message', 42)

