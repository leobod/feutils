import { describe, expect, test } from '@jest/globals'
import { formateDate } from '../src/index'

describe('Date', () => {
  test('formateDate', () => {
    expect(formateDate('2023-03-08 11:07:00', 'YYYY/MM/DD')).toBe('2023/03/08')
  })
})
