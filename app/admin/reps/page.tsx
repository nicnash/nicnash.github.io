"use client";
import React, { useState } from 'react';
import { 
  ChevronDown,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart2
} from 'lucide-react';

const RepManagementView = () => {
  const [expandedRep, setExpandedRep] = useState('rep1');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Sales Team Performance</h1>
        <div className="flex gap-4">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
          </select>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Export Report
          </button>
        </div>
      </div>

      {/* Team Overview Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Team Conversion Rate</div>
          <div className="text-2xl font-semibold mt-1">68%</div>
          <div className="flex items-center gap-1 text-green-400 text-sm mt-1">
            <TrendingUp className="w-4 h-4" />
            <span>+5% vs last week</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Avg Response Time</div>
          <div className="text-2xl font-semibold mt-1">1.8h</div>
          <div className="flex items-center gap-1 text-red-400 text-sm mt-1">
            <TrendingDown className="w-4 h-4" />
            <span>Slower than target</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Active Leads</div>
          <div className="text-2xl font-semibold mt-1">142</div>
          <div className="flex items-center gap-1 text-blue-400 text-sm mt-1">
            <span>Across 8 reps</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-400 text-sm">Revenue This Week</div>
          <div className="text-2xl font-semibold mt-1">$24,850</div>
          <div className="flex items-center gap-1 text-green-400 text-sm mt-1">
            <TrendingUp className="w-4 h-4" />
            <span>+12% vs last week</span>
          </div>
        </div>
      </div>

      {/* Rep Cards */}
      <div className="space-y-4">
        {/* Individual Rep Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => setExpandedRep(expandedRep === 'rep1' ? null : 'rep1')}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg">
                JD
              </div>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-gray-400">Senior Sales Rep</div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-semibold">24</div>
                <div className="text-sm text-gray-400">Active Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">72%</div>
                <div className="text-sm text-gray-400">Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">1.2h</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
              {expandedRep === 'rep1' ? 
                <ChevronDown className="w-6 h-6 text-gray-400" /> :
                <ChevronRight className="w-6 h-6 text-gray-400" />
              }
            </div>
          </div>

          {/* Expanded View */}
          {expandedRep === 'rep1' && (
            <div className="border-t border-gray-700 p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h3 className="font-medium mb-3">Lead Status Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                        <span>New/Uncontacted</span>
                      </div>
                      <span>5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span>In Progress</span>
                      </div>
                      <span>12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Quote Sent</span>
                      </div>
                      <span>4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span>Needs Follow-up</span>
                      </div>
                      <span>3</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h3 className="font-medium mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm">Quote sent to Michael Brown</div>
                      <div className="text-xs text-gray-400">10 minutes ago</div>
                    </div>
                    <div>
                      <div className="text-sm">Follow-up call with Sarah Johnson</div>
                      <div className="text-xs text-gray-400">1 hour ago</div>
                    </div>
                    <div>
                      <div className="text-sm">New lead assigned - Table refinishing</div>
                      <div className="text-xs text-gray-400">2 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-700 rounded-lg">
                  View Full Profile
                </button>
                <button className="px-4 py-2 bg-blue-600 rounded-lg">
                  Manage Leads
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Rep Cards would follow the same pattern */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-lg">
                SJ
              </div>
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-400">Sales Rep</div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-semibold">18</div>
                <div className="text-sm text-gray-400">Active Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">65%</div>
                <div className="text-sm text-gray-400">Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">1.5h</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepManagementView;