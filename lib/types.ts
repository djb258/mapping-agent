export interface ColumnMapping {
  sourceColumn: string;
  targetColumn: string;
  description?: string;
  required: boolean;
  dataType: 'string' | 'number' | 'date' | 'boolean';
  transformation?: string;
}

export interface MappingTemplate {
  id: string;
  name: string;
  description: string;
  sourceFormat: string;
  targetFormat: string;
  columnMappings: ColumnMapping[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MappingResult {
  success: boolean;
  mappedData: any[];
  errors: string[];
  warnings: string[];
  summary: {
    totalRows: number;
    successfulRows: number;
    errorRows: number;
    warningRows: number;
  };
}

export interface EnrollmentData {
  id: string;
  clientId: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  effectiveDate: string;
  planType: string;
  coverageLevel: string;
  dependents?: string[];
  [key: string]: any;
}

export interface ValidationRule {
  field: string;
  rule: 'required' | 'format' | 'range' | 'custom';
  message: string;
  validator?: (value: any) => boolean;
}

export interface VendorOutput {
  vendorId: string;
  vendorName: string;
  outputFormat: string;
  requiredFields: string[];
  transformations: Record<string, string>;
  validationRules: ValidationRule[];
}

export interface VendorOutputResult {
  vendorId: string;
  vendorName: string;
  outputData: any[];
  errors: string[];
  summary: {
    totalRows: number;
    successfulRows: number;
    errorRows: number;
  };
}

export interface BlueprintTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  template: {
    columnMappings: ColumnMapping[];
    validationRules: ValidationRule[];
    vendorOutputs: VendorOutput[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface BlueprintInstance {
  id: string;
  templateId: string;
  name: string;
  description: string;
  clientId: string;
  vendorId: string;
  configuration: {
    columnMappings: ColumnMapping[];
    validationRules: ValidationRule[];
    vendorOutputs: VendorOutput[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface FileUploadResult {
  success: boolean;
  data: any[];
  headers: string[];
  errors: string[];
  fileName: string;
  fileSize: number;
  rowCount: number;
} 