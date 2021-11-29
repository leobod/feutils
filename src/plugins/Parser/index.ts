import Koa from 'koa'

import { setupBodyParser } from './setupBodyParser'

const setupParser = function(app: Koa) {
  setupBodyParser(app)
}

export { setupParser }
