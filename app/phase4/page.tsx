'use client';

import { useState } from 'react';
import { Settings, Plus, Download, ArrowLeft, Folder, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Phase4() {
  const [activeTab, setActiveTab] = useState('templates');
  const [blueprints] = useState([
    { id: 1, name: 'Standard Employee Enrollment', type: 'template', vendor: 'Generic', lastUsed: '2024-01-15' },
    { id: 2, name: 'Vendor A Configuration', type: 'instance', vendor: 'Vendor A', lastUsed: '2024-01-10' },
    { id: 3, name: 'Vendor B Configuration', type: 'instance', vendor: 'Vendor B', lastUsed: '2024-01-12' },
    { id: 4, name: 'Healthcare Benefits Template', type: 'template', vendor: 'Generic', lastUsed: '2024-01-08' }
  ]);

  const tabs = [
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'instances', name: 'Instances', icon: Folder },
    { id: 'library', name: 'Library', icon: Settings }
  ];

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
            Phase 4: Blueprint Management
          </h1>
          <p className="text-gray-600">
            Create, manage, and reuse mapping blueprints for different clients and vendors.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex space-x-1 mb-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'templates' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Blueprint Templates</h2>
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Template
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blueprints.filter(b => b.type === 'template').map((blueprint) => (
                    <div key={blueprint.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{blueprint.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          Template
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Vendor: {blueprint.vendor}</p>
                      <p className="text-sm text-gray-500 mb-3">Last used: {blueprint.lastUsed}</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instances' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Blueprint Instances</h2>
                  <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Instance
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blueprints.filter(b => b.type === 'instance').map((blueprint) => (
                    <div key={blueprint.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{blueprint.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                          Instance
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Vendor: {blueprint.vendor}</p>
                      <p className="text-sm text-gray-500 mb-3">Last used: {blueprint.lastUsed}</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                          Use
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'library' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Blueprint Library</h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Library Management</h3>
                  <p className="text-gray-600 mb-4">
                    Import, export, and manage your blueprint library across different projects.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Import Library
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Export Library
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Blueprint Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {blueprints.filter(b => b.type === 'template').length}
              </div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {blueprints.filter(b => b.type === 'instance').length}
              </div>
              <div className="text-sm text-gray-600">Instances</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(blueprints.map(b => b.vendor)).size}
              </div>
              <div className="text-sm text-gray-600">Vendors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 