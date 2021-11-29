import { ExcelJsonTransformer } from '../../src/tool/ExcelPro'

class TestExcelPro {
  static test = function() {
    console.log(process.cwd())
    const transformer = new ExcelJsonTransformer(process.cwd() + '/assets/demo.xls')
    console.log(transformer.getSheetData(0))
  }
}

export default TestExcelPro
