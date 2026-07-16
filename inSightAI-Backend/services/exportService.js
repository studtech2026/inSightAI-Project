import fs from "fs";
import path from "path";

import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
import { Parser } from "@json2csv/plainjs";

const { Workbook } = ExcelJS;

class ExportService {
  /**
   * Export CSV
   */
  async exportCSV(data, fileName) {
    const exportDir = "exports";

    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const filePath = path.join(exportDir, `${fileName}.csv`);

    // Handle empty data
    if (!data || data.length === 0) {
      fs.writeFileSync(filePath, "No reports found");
      return filePath;
    }

    const parser = new Parser({
      fields: Object.keys(data[0]),
    });

    const csv = parser.parse(data);

    fs.writeFileSync(filePath, csv);

    return filePath;
  }

  /**
   * Export Excel
   */
  async exportExcel(data, fileName) {
    const exportDir = "exports";

    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const workbook = new Workbook();

    const worksheet = workbook.addWorksheet("Report");

    if (data.length > 0) {
      worksheet.columns = Object.keys(data[0]).map((key) => ({
        header: key,
        key,
        width: 20,
      }));

      worksheet.addRows(data);
    }

    const filePath = path.join(exportDir, `${fileName}.xlsx`);

    await workbook.xlsx.writeFile(filePath);

    return filePath;
  }

  /**
   * Export PDF
   */
  async exportPDF(data, fileName) {
    const exportDir = "exports";

    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const filePath = path.join(exportDir, `${fileName}.pdf`);

    const doc = new PDFDocument();

    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(18).text("InsightAI Report", {
      align: "center",
    });

    doc.moveDown();

    data.forEach((item, index) => {
      doc.fontSize(12).text(`${index + 1}.`);

      Object.entries(item).forEach(([key, value]) => {
        doc.text(`${key}: ${value}`);
      });

      doc.moveDown();
    });

    doc.end();

    return new Promise((resolve) => {
      stream.on("finish", () => resolve(filePath));
    });
  }
}

export default new ExportService();
