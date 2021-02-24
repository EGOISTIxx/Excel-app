import { capitalaze } from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (this.$root) {
      throw new Error('No root provide for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      const name = this.name || ''
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implemented in ${name} Component!`
          )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalaze(eventName)
}
