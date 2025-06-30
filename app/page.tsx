'use client';

import Link from 'next/link';
import { Upload, FileText, Database, Settings, ArrowRight } from 'lucide-react';

export default function Home() {
  const phases = [
    {
      id: 1,
      title: 'Data Intake & Template Building',
      description: 'Upload client files, generate column descriptions, and create editable mapping templates',
      icon: Upload,
      href: '/phase1',
      features: ['CSV/XLSX Upload', 'AI Column Analysis', 'Template Creation', 'Export Formats']
    },
    {
      id: 2,
      title: 'Template & Master File Mapping',
      description: 'Map client data to master enrollment files with auto-mapping and manual overrides',
      icon: FileText,
      href: '/phase2',
      features: ['Auto Column Mapping', 'Manual Overrides', 'Validation Rules', 'Error Handling']
    },
    {
      id: 3,
      title: 'Enrollment Processing & Neon Integration',
      description: 'Process enrollment data, handle errors, and generate Neon SQL blueprints',
      icon: Database,
      href: '/phase3',
      features: ['Data Validation', 'Error Processing', 'Vendor Outputs', 'Neon SQL Generation']
    },
    {
      id: 4,
      title: 'Blueprint Management',
      description: 'Create, manage, and reuse mapping blueprints for different clients and vendors',
      icon: Settings,
      href: '/phase4',
      features: ['Template Library', 'Instance Management', 'Import/Export', 'Version Control']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Insurance Enrollment Mapping Agent
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your insurance enrollment data processing with AI-powered mapping, 
            validation, and vendor-specific output generation.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {phases.map((phase) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={phase.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Phase {phase.id}: {phase.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {phase.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {phase.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={phase.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Processing Phases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">∞</div>
              <div className="text-sm text-gray-600">File Formats Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">AI</div>
              <div className="text-sm text-gray-600">Column Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Error Handling</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <p>Ready to streamline your enrollment process? Start with Phase 1 to upload your first file.</p>
        </div>
      </div>
    </div>
  );
} 