// import { describe, expect, test } from '@jest/globals'
// @ts-ignore
import { EventBus } from '../dist/index.cjs.js'

describe('EventBus', () => {
  test('singleton', () => {

    const printInfo = () => {
      console.log('info')
    }
    const eventBus1 = EventBus.getBus()
    eventBus1.$on('print', printInfo)

    eventBus1.eventMap.forEach((value, key, map) => {
      console.log('value: ', value, ' key: ', key)
    })

    const eventBus2 = EventBus.getBus()
    eventBus2.eventMap.forEach((value, key, map) => {
      console.log('value: ', value, ' key: ', key)
    })

    expect(eventBus1).toEqual(eventBus2)
  })
})
