import Koa from 'koa'

import bodyparser from 'koa-bodyparser'

const setupBodyParser = function(app: Koa) {
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
}

export { setupBodyParser }
