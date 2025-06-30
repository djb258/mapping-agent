'use client';

import { useState } from 'react';
import { Upload, FileText, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Phase1() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [template, setTemplate] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const processFile = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setTemplate({
        columns: [
          { name: 'Employee ID', description: 'Unique identifier for each employee', type: 'string' },
          { name: 'First Name', description: 'Employee first name', type: 'string' },
          { name: 'Last Name', description: 'Employee last name', type: 'string' },
          { name: 'Email', description: 'Employee email address', type: 'email' },
          { name: 'Department', description: 'Employee department', type: 'string' }
        ]
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Phase 1: Data Intake & Template Building
          </h1>
          <p className="text-gray-600">
            Upload your client files and generate mapping templates with AI-powered column analysis.
          </p>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Client File</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Drag and drop your CSV or XLSX file here, or click to browse
            </p>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Choose File
            </label>
            {file && (
              <p className="mt-4 text-sm text-gray-500">
                Selected: {file.name}
              </p>
            )}
          </div>

          {file && (
            <div className="mt-6">
              <button
                onClick={processFile}
                disabled={isProcessing}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Generate Template'}
              </button>
            </div>
          )}
        </div>

        {/* Template Preview */}
        {template && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Generated Template</h2>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Template
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Column Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {template.columns.map((column: any, index: number) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{column.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{column.description}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {column.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Steps</h3>
          <p className="text-gray-600 mb-4">
            Once you have your template, proceed to Phase 2 to map it to your master enrollment file.
          </p>
          <Link
            href="/phase2"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue to Phase 2
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
} 