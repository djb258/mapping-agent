'use client';

import { useState } from 'react';
import { Upload, FileText, Download, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Phase2() {
  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const [masterFile, setMasterFile] = useState<File | null>(null);
  const [isMapping, setIsMapping] = useState(false);
  const [mapping, setMapping] = useState<any>(null);

  const handleTemplateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setTemplateFile(file);
  };

  const handleMasterUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setMasterFile(file);
  };

  const processMapping = async () => {
    if (!templateFile || !masterFile) return;
    
    setIsMapping(true);
    // Simulate mapping process
    setTimeout(() => {
      setMapping({
        templateColumns: ['Employee ID', 'First Name', 'Last Name', 'Email', 'Department'],
        masterColumns: ['Emp_ID', 'FName', 'LName', 'Email_Addr', 'Dept'],
        mappings: [
          { template: 'Employee ID', master: 'Emp_ID', confidence: 95 },
          { template: 'First Name', master: 'FName', confidence: 90 },
          { template: 'Last Name', master: 'LName', confidence: 90 },
          { template: 'Email', master: 'Email_Addr', confidence: 85 },
          { template: 'Department', master: 'Dept', confidence: 88 }
        ]
      });
      setIsMapping(false);
    }, 3000);
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
            Phase 2: Template & Master File Mapping
          </h1>
          <p className="text-gray-600">
            Map your template to the master enrollment file with auto-mapping and manual overrides.
          </p>
        </div>

        {/* File Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Template File */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Template File</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-4">Upload your template file</p>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleTemplateUpload}
                className="hidden"
                id="template-upload"
              />
              <label
                htmlFor="template-upload"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Choose Template
              </label>
              {templateFile && (
                <p className="mt-2 text-sm text-gray-500">{templateFile.name}</p>
              )}
            </div>
          </div>

          {/* Master File */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Master Enrollment File</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-4">Upload your master file</p>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleMasterUpload}
                className="hidden"
                id="master-upload"
              />
              <label
                htmlFor="master-upload"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
              >
                Choose Master File
              </label>
              {masterFile && (
                <p className="mt-2 text-sm text-gray-500">{masterFile.name}</p>
              )}
            </div>
          </div>
        </div>

        {/* Process Mapping */}
        {templateFile && masterFile && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <button
              onClick={processMapping}
              disabled={isMapping}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {isMapping ? 'Processing Mapping...' : 'Process Auto-Mapping'}
            </button>
          </div>
        )}

        {/* Mapping Results */}
        {mapping && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Column Mappings</h2>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Mappings
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Template Column</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Master Column</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Confidence</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mapping.mappings.map((map: any, index: number) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{map.template}</td>
                      <td className="border border-gray-300 px-4 py-2">{map.master}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                          map.confidence >= 90 ? 'bg-green-100 text-green-800' :
                          map.confidence >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {map.confidence}%
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          Edit
                        </button>
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
            Review and adjust your mappings, then proceed to Phase 3 for enrollment processing.
          </p>
          <Link
            href="/phase3"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue to Phase 3
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 