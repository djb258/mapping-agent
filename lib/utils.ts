import * as XLSX from 'xlsx';
import Papa from 'papaparse';

export function parseExcelFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export function parseCSVFile(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          reject(new Error('CSV parsing errors: ' + results.errors.map(e => e.message).join(', ')));
        } else {
          resolve(results.data);
        }
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

export function exportToExcel(data: any[], filename: string) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, filename);
}

export function exportToCSV(data: any[], filename: string) {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generateColumnDescriptions(headers: string[]): string[] {
  // This would typically call an AI service to generate descriptions
  // For now, return basic descriptions
  return headers.map(header => {
    const cleanHeader = header.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase();
    if (cleanHeader.includes('name')) return 'Full name of the person';
    if (cleanHeader.includes('date')) return 'Date in YYYY-MM-DD format';
    if (cleanHeader.includes('id')) return 'Unique identifier';
    if (cleanHeader.includes('email')) return 'Email address';
    if (cleanHeader.includes('phone')) return 'Phone number';
    return `Data field for ${header}`;
  });
}

export function validateData(data: any[], requiredFields: string[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  data.forEach((row, index) => {
    requiredFields.forEach(field => {
      if (!row[field] || row[field].toString().trim() === '') {
        errors.push(`Row ${index + 1}: Missing required field "${field}"`);
      }
    });
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
}

export function generateNeonSQL(data: any[], tableName: string): string {
  const columns = Object.keys(data[0] || {});
  const createTableSQL = `
CREATE TABLE IF NOT EXISTS ${tableName} (
  ${columns.map(col => `${col} TEXT`).join(',\n  ')},
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

  const insertSQL = data.map(row => {
    const values = columns.map(col => `'${String(row[col] || '').replace(/'/g, "''")}'`);
    return `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
  }).join('\n');

  return createTableSQL + '\n' + insertSQL;
} 