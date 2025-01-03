const ExcelJS = require("exceljs");

async function readExcel(filePath, sheetName) {
  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
      console.error(`Sheet "${sheetName}" not found in ${filePath}`);
      return [];
    }

    const jsonData = [];
    const header = [];

    // Read header row
    worksheet.getRow(1).eachCell((cell) => {
      header.push(cell.value);
    });
    console.log("Header:", header);

    // Read data rows
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; 
      const rowData = {};

      header.forEach((colName, colIndex) => {
        rowData[colName] = row.getCell(colIndex + 1).value || "";
      });

      jsonData.push(rowData);
    });
    console.log("Data:", jsonData);

    return jsonData;
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return [];
  }
}

module.exports = { readExcel };
