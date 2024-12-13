"use client";

import React, { useState } from 'react';
import { 
  Bell, 
  Clock,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle,
  Calendar,
  Inbox,
  PieChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardUI = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="h-screen bg-gray-900">
      {/* Top Navigation */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-white">Service Management Platform</div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-300" />
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              JD
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-4 py-2 rounded flex items-center gap-3 ${
                activeTab === 'dashboard' ? 'bg-blue-900 text-blue-200' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <PieChart className="w-5 h-5" />
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('leads')}
              className={`w-full text-left px-4 py-2 rounded flex items-center gap-3 ${
                activeTab === 'leads' ? 'bg-blue-900 text-blue-200' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Inbox className="w-5 h-5" />
              Leads
            </button>
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`w-full text-left px-4 py-2 rounded flex items-center gap-3 ${
                activeTab === 'calendar' ? 'bg-blue-900 text-blue-200' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Calendar
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto bg-gray-900">
          {/* Priority Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Unassigned Leads</div>
                    <div className="text-2xl font-semibold text-white">12</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Closed Today</div>
                    <div className="text-2xl font-semibold text-white">8</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Awaiting Response</div>
                    <div className="text-2xl font-semibold text-white">15</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <DollarSign className="w-6 h-6 text-purple-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Revenue Today</div>
                    <div className="text-2xl font-semibold text-white">$4,250</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lead Management Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* New Leads */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-white">New Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Lead Item */}
                  <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-white">John Smith</div>
                        <div className="text-sm text-gray-300">Chair Repair - Houston</div>
                      </div>
                      <div className="text-sm text-blue-300">2m ago</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 text-sm bg-blue-900 text-blue-200 rounded-full">
                        Assign
                      </button>
                      <button className="px-3 py-1 text-sm bg-gray-600 text-gray-200 rounded-full">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-white">Sarah Johnson</div>
                        <div className="text-sm text-gray-300">Table Refinishing - Dallas</div>
                      </div>
                      <div className="text-sm text-blue-300">15m ago</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 text-sm bg-blue-900 text-blue-200 rounded-full">
                        Assign
                      </button>
                      <button className="px-3 py-1 text-sm bg-gray-600 text-gray-200 rounded-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* In Progress */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-white">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-white">Michael Brown</div>
                        <div className="text-sm text-gray-300">Upholstery - Pending Quote</div>
                      </div>
                      <div className="text-sm text-yellow-300">4h remaining</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 text-sm bg-green-900 text-green-200 rounded-full">
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Required */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-white">Action Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-700 rounded-lg border border-red-900">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-white">David Wilson</div>
                        <div className="text-sm text-red-300">Response Overdue (36h)</div>
                      </div>
                      <div className="text-sm text-red-300">Escalated</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 text-sm bg-red-900 text-red-200 rounded-full">
                        Urgent Response
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;