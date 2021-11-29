import Koa from 'koa'

import { setupRequestTimeLogger } from './requestTimeLogger'

const setupLogger = function(app: Koa) {
  setupRequestTimeLogger(app)
}

export { setupLogger }
