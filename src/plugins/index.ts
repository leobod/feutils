import Koa from 'koa'

import { RequestTimeRecorder } from './Recorder/RequestTimeRecorder'

const setupPlugins = function(app: Koa) {
  app.use(RequestTimeRecorder)
}

export { setupPlugins }
