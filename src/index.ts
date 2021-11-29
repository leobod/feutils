
import Koa from 'koa'
import Router from 'koa-router'
import { RequestTimeRecorder } from './plugins'

const app = new Koa()
app.use(RequestTimeRecorder)

const router = new Router()

router.get(/\//, async(ctx, next) => {
  ctx.body = 'Hellow World !'
})
app.use(router.routes())

app.listen(3000)

console.log('Server is runing !! http://localhost:3000')
