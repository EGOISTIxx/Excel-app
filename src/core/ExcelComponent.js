import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubsсribers = []

    this.prepare()
  }

  // настраиваем компонент до init
  prepare() {}

  // Возвращает шаблон компоненты
  toHTML() {
    return ''
  }

  // уведомление слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // подписка на события event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubsсribers.push(unsub)
  }

  // инициализируем компонент, добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // удаляем компонент, чистим слушатели
  destroy() {
    this.removeDOMListeners()
    this.unsubsсribers.forEach((unsub) => unsub())
  }
}
