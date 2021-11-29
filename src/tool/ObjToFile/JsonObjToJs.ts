import fs from 'fs'

import { DataObj } from './DataObj'

class JsonObjToJs {
  static toFile(dataObj: DataObj, outPath: string, isZip: boolean): boolean {
    let result: boolean = true
    try {
      if (isZip) {
        fs.writeFileSync(outPath, JSON.stringify(dataObj)) // 压缩
      } else {
        fs.writeFileSync(outPath, JSON.stringify(dataObj, null, '\t')) // 不压缩
      }
      result = true
    } catch (err) {
      result = false
    }
    return result
  }
}

export { JsonObjToJs }
