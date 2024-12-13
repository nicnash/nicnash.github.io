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
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IndividualRepView = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
      <div className="p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-300">Conversion Rate</div>
              <div className="text-green-400 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5%
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-100">72%</div>
            <div className="text-sm text-gray-400 mt-1">vs 67% team avg</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-300">Response Time</div>
              <div className="text-red-400 flex items-center text-sm">
                <TrendingDown className="w-4 h-4 mr-1" />
                +12min
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-100">1.2h</div>
            <div className="text-sm text-gray-400 mt-1">vs 1.8h team avg</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-300">Active Leads</div>
            </div>
            <div className="text-2xl font-semibold text-gray-100">24</div>
            <div className="text-sm text-gray-400 mt-1">8 high priority</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-300">Revenue (MTD)</div>
              <div className="text-green-400 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12%
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-100">$12,450</div>
            <div className="text-sm text-gray-400 mt-1">15 closed deals</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Lead Status */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Lead Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span>New/Uncontacted</span>
                  </div>
                  <span>5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    <span>In Discussion</span>
                  </div>
                  <span>8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Pending Quote</span>
                  </div>
                  <span>6</span>
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
                  <span>1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
              <button className="text-sm text-blue-400">View All</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-sm">Sent quote to Michael Brown</div>
                    <div className="text-xs text-gray-400">10 minutes ago</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-300" />
                  </div>
                  <div>
                    <div className="text-sm">Call with Sarah Johnson</div>
                    <div className="text-xs text-gray-400">1 hour ago</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-sm">New lead assigned</div>
                    <div className="text-xs text-gray-400">2 hours ago</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Leads */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">Active Leads</CardTitle>
              <button className="p-1 hover:bg-gray-700 rounded">
                <Filter className="w-4 h-4" />
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">Robert Smith</div>
                      <div className="text-sm text-gray-400">Chair Repair - Houston</div>
                    </div>
                    <button className="p-1 hover:bg-gray-600 rounded">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-yellow-900 text-yellow-200 rounded text-xs">Pending Quote</span>
                    <span className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-xs">High Value</span>
                  </div>
                </div>

                <div className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">Jennifer Lee</div>
                      <div className="text-sm text-gray-400">Table Refinishing - Dallas</div>
                    </div>
                    <button className="p-1 hover:bg-gray-600 rounded">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded text-xs">In Discussion</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart */}
          <Card className="col-span-2 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-400">
                [Performance Chart Would Go Here]
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
              <button className="text-sm text-blue-400">View All</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium">Follow-up: Michael Brown</div>
                    <div className="text-xs text-gray-400">Tomorrow at 2:00 PM</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-medium">Call with David Wilson</div>
                    <div className="text-xs text-gray-400">Thursday at 11:00 AM</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndividualRepView;
