import Koa from 'koa'

const RequestTimeRecorder = async function(ctx: Koa.BaseContext, next: () => Promise<any>) {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url}--${ms}ms`)
}

export default RequestTimeRecorder
