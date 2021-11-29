import Koa from 'koa'

import { setupLogger } from './Logger'
import { setupParser } from './Parser'

const setupPlugins = function(app: Koa) {
  setupLogger(app)
  setupParser(app)
}

export { setupPlugins }
