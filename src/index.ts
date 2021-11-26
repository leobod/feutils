
import { IncomingMessage, OutgoingMessage } from 'http'
import http from 'http'

const server = http.createServer((req: IncomingMessage, res: OutgoingMessage) => {
  res.write('hello world')
  res.end()
})

const port = 8080
server.listen(port, () => {
  console.log('server is listening http:localhost:' + port)
})
