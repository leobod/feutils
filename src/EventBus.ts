interface EventHandler {
  fn: EventFn,
  once: boolean
}

type EventFn = (...param: any[]) => any

// type ArrNS = number[] | string[]
// type ArrNS2 = Array<number | string>

let onlyBus: EventBus
class EventBus {

  static getBus = (singleton = true) => {
    if (singleton && onlyBus) {
      return onlyBus
    } else {
      onlyBus = new EventBus()
      return onlyBus
    }
  }
  eventMap: Map<string, Array<EventHandler>>
  constructor() {
    this.eventMap = new Map()
  }

  $on(name, fn, once = false) {
    if (!this.eventMap.has(name)) {
      this.eventMap.set(name, [])
    }
    const eventList = this.eventMap.get(name) || []
    const filterList = eventList.filter((item) => item.fn === fn)
    if (filterList && filterList.length > 0) {
      return [name, -1]
    } else {
      eventList.push({ fn, once })
      return [name, eventList.length - 1]
    }
  }

  $emit(name, ...args) {
    if (!this.eventMap.has(name)) {
      return
    }
    const eventList = this.eventMap.get(name) || []
    for (const id in eventList) {
      const idx = Number(id)
      eventList[idx].fn(...args)
      if (eventList[idx].once) {
        eventList.splice(idx, 1)
      }
    }
  }

  $off(name, val) {
    if (!this.eventMap.has(name)) {
      return
    }
    const eventList = this.eventMap.get(name) || []
    if (val) {
      if (typeof val === 'function') {
        const idList = eventList.map((item) => item.fn)
        const idx = idList.indexOf(val)
        eventList.splice(idx, 1)
        console.info(`id(${idx}) 事件已被取消订阅(基于函数计算)`)
      } else if (typeof val === 'number') {
        eventList.splice(val, 1)
        console.info(`id(${val}) 事件已被取消订阅`)
      }
    } else {
      eventList.length = 0
    }
  }

  $once(name, fn) {
    return this.$on(name, fn, true)
  }
}

export { EventBus }
