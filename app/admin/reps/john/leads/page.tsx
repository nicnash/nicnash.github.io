"use client";
"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart2,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  MoreVertical,
  Filter,
  ArrowUpDown,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LeadsTabView = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [viewMode, setViewMode] = useState("list");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-700">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <button className="text-gray-300 hover:text-gray-100">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl text-white">
                JD
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-100">John Doe</h1>
                <div className="text-gray-300">Senior Sales Representative</div>
              </div>
            </div>
            <div className="ml-auto flex gap-3">
              <button className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-100">Message</button>
              <button className="px-4 py-2 bg-blue-600 rounded-lg text-gray-100">Manage Leads</button>
            </div>
          </div>

          {/* Rest of the component structure remains the same, updating text colors */}
          <div className="flex gap-6 -mb-px">
            {["Overview", "Leads", "Activity", "Performance"].map((tab) => (
              <button
                key={tab}
                className={`pb-4 px-2 text-sm font-medium border-b-2 ${
                  activeTab === tab.toLowerCase()
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-100"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads by name, type, or location..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-100 placeholder-gray-500"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              filterOpen
                ? "bg-gray-700 border-gray-600 text-gray-100"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:text-gray-100"
            }`}
          >
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100">
            <option>Sort by: Recent</option>
            <option>Sort by: Priority</option>
            <option>Sort by: Status</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-gray-100 rounded-lg">Add Lead</button>
        </div>
      </div>

      {/* Active Filters */}
      {filterOpen && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Status</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100">
                <option>All Statuses</option>
                <option>New/Uncontacted</option>
                <option>In Discussion</option>
                <option>Quote Sent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Type</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100">
                <option>All Types</option>
                <option>Repair</option>
                <option>Refinishing</option>
                <option>Upholstery</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Priority</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100">
                <option>All Priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Location</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100">
                <option>All Locations</option>
                <option>Houston</option>
                <option>Dallas</option>
                <option>Austin</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">
                <div className="flex items-center gap-2 text-gray-400">
                  Customer
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center gap-2 text-gray-400">
                  Service Type
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center gap-2 text-gray-400">
                  Status
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center gap-2 text-gray-400">
                  Last Contact
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center gap-2 text-gray-400">
                  Value
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-3 px-4">
                <div>
                  <div className="font-medium text-gray-100">Robert Smith</div>
                  <div className="text-sm text-gray-400">Houston, TX</div>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">Chair Repair</div>
                <div className="text-sm text-gray-400">Recliner mechanism</div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm bg-yellow-900 text-yellow-200">
                  <Clock className="w-4 h-4" />
                  Quote Pending
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">2 hours ago</div>
                <div className="text-sm text-gray-400">via Email</div>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">$450</div>
                <div className="text-sm text-green-400">High Value</div>
              </td>
              <td className="py-3 px-4">
                <div className="flex justify-center gap-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Calendar className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-700">
              <td className="py-3 px-4">
                <div>
                  <div className="font-medium text-gray-100">Jennifer Lee</div>
                  <div className="text-sm text-gray-400">Dallas, TX</div>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">Table Refinishing</div>
                <div className="text-sm text-gray-400">Dining set</div>
              </td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm bg-purple-900 text-purple-200">
                  <AlertCircle className="w-4 h-4" />
                  In Discussion
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">Yesterday</div>
                <div className="text-sm text-gray-400">via Phone</div>
              </td>
              <td className="py-3 px-4">
                <div className="text-gray-100">$1,200</div>
                <div className="text-sm text-green-400">High Value</div>
              </td>
              <td className="py-3 px-4">
                <div className="flex justify-center gap-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <Calendar className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-gray-100">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>

            {/* More rows would follow the same pattern */}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-400">Showing 1-10 of 24 leads</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:text-gray-100">Previous</button>
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:text-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsTabView;
