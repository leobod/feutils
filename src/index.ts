
// import { IncomingMessage, OutgoingMessage } from 'http'
// import http from 'http'
//
// import { printHello } from './demo/hello'
//
// const server = http.createServer((req: IncomingMessage, res: OutgoingMessage) => {
//   printHello('Hello')
//   res.write('hello world')
//   res.end()
// })
//
// const port = 8080
// server.listen(port, () => {
//   console.log('server is listening http:localhost:' + port)
// })

import { ExcelJsonTransformer } from './tool/ExcelPro'

console.log(process.cwd())

const transformer = new ExcelJsonTransformer(process.cwd() + '/assets/demo.xls')
console.log(transformer.getSheetData(0))
