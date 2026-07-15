import fs from "fs";
import path from "path";
import csv from "csv-parser";
import xlsx from "xlsx";
import ApiError from "./ApiError.js";

const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        const totalRows = rows.length;

        const totalColumns =
          totalRows > 0 ? Object.keys(rows[0]).length : 0;

        resolve({
          data: rows,
          totalRows,
          totalColumns,
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

const parseExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);

  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  const rows = xlsx.utils.sheet_to_json(worksheet);

  const totalRows = rows.length;

  const totalColumns =
    totalRows > 0 ? Object.keys(rows[0]).length : 0;

  return {
    data: rows,
    totalRows,
    totalColumns,
  };
};

const parseFile = async (filePath) => {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".csv":
      return await parseCSV(filePath);

    case ".xls":
    case ".xlsx":
      return parseExcel(filePath);

    default:
      throw new ApiError(
        400,
        "Unsupported file format."
      );
  }
};

export default parseFile;