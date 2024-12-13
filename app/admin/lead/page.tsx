'use client';
import React, { useState } from 'react';
import { 
  Search,
  Filter,
  ArrowUpDown,
  MoreVertical,
  AlertCircle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const AdminLeadView = () => {
  const [viewMode, setViewMode] = useState('list'); // list or grid
  const [groupBy, setGroupBy] = useState('rep'); // rep, status, date

  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Header with Controls */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Lead Management</h1>
          <div className="flex gap-4">
            <select 
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm"
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="rep">Group by Rep</option>
              <option value="status">Group by Status</option>
              <option value="date">Group by Date</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Reassign Selected
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-400" />
              <div className="text-sm text-gray-400">Active Reps</div>
            </div>
            <div className="text-2xl font-semibold mt-2">8</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
              <div className="text-sm text-gray-400">Unassigned</div>
            </div>
            <div className="text-2xl font-semibold mt-2">12</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-red-400" />
              <div className="text-sm text-gray-400">Overdue</div>
            </div>
            <div className="text-2xl font-semibold mt-2">5</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div className="text-sm text-gray-400">Closed Today</div>
            </div>
            <div className="text-2xl font-semibold mt-2">23</div>
          </div>
        </div>

        {/* Rep Performance */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
          <h2 className="text-lg font-semibold mb-4">Rep Performance</h2>
          <div className="grid grid-cols-4 gap-8">
            {/* Rep Card */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                JD
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-400">15 active leads</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                SJ
              </div>
              <div>
                <div className="font-medium">Sarah Jones</div>
                <div className="text-sm text-gray-400">12 active leads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead List */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700 font-medium">
            Active Leads
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    Customer
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    Assigned To
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    Status
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    Last Activity
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-4">
                  <div className="font-medium">Robert Smith</div>
                  <div className="text-sm text-gray-400">Chair Repair - Houston</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">
                      JD
                    </div>
                    <span>John Doe</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-200 rounded-full text-sm">
                    Pending Quote
                  </span>
                </td>
                <td className="p-4">
                  <div>2 hours ago</div>
                  <div className="text-sm text-gray-400">Sent follow-up email</div>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-gray-700 rounded">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
              {/* Additional rows would follow the same pattern */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeadView;