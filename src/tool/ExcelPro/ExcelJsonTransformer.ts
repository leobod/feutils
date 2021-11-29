
import xlsx from 'node-xlsx'

interface LangObj {
  [key: string]: any,
}

class ExcelJsonTransformer {
  sheets: any
  constructor(sheetPath: string) {
    this.sheets = xlsx.parse(sheetPath)
  }

  getSheetData(tabnum: number) {
    return this.sheets[tabnum].data
  }

  getJsonObjOfSheetData(tabnum: number, colx: number, coly: number): Object {
    const sheetData = this.getSheetData(tabnum)
    const jsonObj: LangObj = {}
    sheetData.forEach((row:any) => {
      jsonObj[row[colx]] = row[coly]
    })
    return jsonObj
  }
}

export { ExcelJsonTransformer }
