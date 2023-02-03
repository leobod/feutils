import {getAllDirsAndFiles} from "./getDollarTKeywords"


const main = () => {
  const args = process.argv.slice(2)
  console.log(args)
  // const rootPath = 'D:\\project\\Visitor2.0\\main\\Vistor2.0Web\\src'
  let rootPath = ''
  let idxOfPath = -1
  args.forEach((item, idx) => {
    if (item === '--path') {
      idxOfPath = idx + 1
    }
  })
  if (idxOfPath !== -1) {
    rootPath = args[idxOfPath]
    getAllDirsAndFiles(rootPath)
  }
}

main()
