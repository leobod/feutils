
import xlsx from 'node-xlsx'

class ExcelJsonTransformer {
  sheets: any
  constructor(sheetPath: string) {
    this.sheets = xlsx.parse(sheetPath)
  }

  getSheetData(tab: number) {
    return this.sheets[tab].data
  }
}

export default ExcelJsonTransformer
