import { ExcelJsonTransformer } from '../../src/tool/ExcelPro'

import { JsonObjToJs } from '../../src/tool/ObjToFile/JsonObjToJs'

class TestExcelPro {
  static test = function() {
    console.log(process.cwd())
    const transformer = new ExcelJsonTransformer(process.cwd() + '/assets/demo.xls')
    const jsonObj = transformer.getJsonObjOfSheetData(0, 0, 1)
    const res = JsonObjToJs.toFile(jsonObj, process.cwd() + '/assets/out/demo.json', false)
    console.log(res)
  }
}

export default TestExcelPro
