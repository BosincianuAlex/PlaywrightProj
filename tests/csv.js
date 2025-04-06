const excelJS = require('exceljs');

async function readCSV() {
    // Create a new workbook
    const workBook = new excelJS.Workbook();
    await  workBook.csv.readFile("Book.csv")
    workBook.eachSheet((WorkSheet) => {
        WorkSheet.eachRow((row) => {  
            console.log(row.getCell(1).value + " = " + row.getCell(2).value);
        })
    })
}

readCSV()