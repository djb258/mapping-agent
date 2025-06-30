'use client';

import { useState } from 'react';
import { Database, Download, ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Phase3() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const processEnrollment = async () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setResults({
        totalRecords: 150,
        validRecords: 142,
        errorRecords: 8,
        vendors: [
          { name: 'Vendor A', records: 45, status: 'success' },
          { name: 'Vendor B', records: 38, status: 'success' },
          { name: 'Vendor C', records: 59, status: 'success' }
        ],
        errors: [
          { row: 23, field: 'Email', issue: 'Invalid email format' },
          { row: 67, field: 'Employee ID', issue: 'Duplicate ID found' },
          { row: 89, field: 'Department', issue: 'Department not found' }
        ]
      });
      setIsProcessing(false);
    }, 4000);
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
            Phase 3: Enrollment Processing & Neon Integration
          </h1>
          <p className="text-gray-600">
            Process enrollment data, handle errors, and generate vendor-specific outputs with Neon SQL integration.
          </p>
        </div>

        {/* Processing Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Process Enrollment Data</h2>
          <button
            onClick={processEnrollment}
            disabled={isProcessing}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {isProcessing ? 'Processing Enrollment...' : 'Start Enrollment Processing'}
          </button>
        </div>

        {/* Results */}
        {results && (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600">{results.totalRecords}</div>
                <div className="text-sm text-gray-600">Total Records</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600">{results.validRecords}</div>
                <div className="text-sm text-gray-600">Valid Records</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-red-600">{results.errorRecords}</div>
                <div className="text-sm text-gray-600">Error Records</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600">{results.vendors.length}</div>
                <div className="text-sm text-gray-600">Vendors</div>
              </div>
            </div>

            {/* Vendor Outputs */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Vendor Outputs</h2>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.vendors.map((vendor: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{vendor.records} records processed</p>
                    <button className="w-full px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Log */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Log</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Row</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.errors.map((error: any, index: number) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{error.row}</td>
                        <td className="border border-gray-300 px-4 py-2">{error.field}</td>
                        <td className="border border-gray-300 px-4 py-2 text-red-600">{error.issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Steps</h3>
          <p className="text-gray-600 mb-4">
            Review the processing results and proceed to Phase 4 for blueprint management.
          </p>
          <Link
            href="/phase4"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue to Phase 4
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 