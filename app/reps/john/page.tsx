"use client";
import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Send,
  Phone,
  Mail,
  Filter,
  Settings,
} from "lucide-react";

const ConversationWorkspace = () => {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [templateMenuOpen, setTemplateMenuOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div>
      <div className="h-screen bg-gray-900 text-gray-100 flex">
        {/* Left Sidebar - Folders/Filters */}
        <div className="w-64 border-r border-gray-700 bg-gray-800 p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">JD</div>
              <div className="text-sm">John Doe</div>
            </div>
            <button className="text-gray-400 hover:text-gray-100">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1">
            <button
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                activeFolder === "inbox" ? "bg-gray-700 text-gray-100" : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <span>Inbox</span>
              <span className="text-sm bg-blue-600 px-2 rounded">12</span>
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                activeFolder === "pending_quote" ? "bg-gray-700 text-gray-100" : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <span>Pending Quote</span>
              <span className="text-sm bg-gray-700 px-2 rounded">5</span>
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                activeFolder === "pending_response" ? "bg-gray-700 text-gray-100" : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <span>Pending Response</span>
              <span className="text-sm bg-gray-700 px-2 rounded">3</span>
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                activeFolder === "scheduled" ? "bg-gray-700 text-gray-100" : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              <span>Scheduled</span>
              <span className="text-sm bg-gray-700 px-2 rounded">8</span>
            </button>
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-400 mb-2">Quick Filters</div>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 rounded text-gray-400 hover:bg-gray-700">
                Commercial Leads
              </button>
              <button className="w-full text-left px-3 py-2 rounded text-gray-400 hover:bg-gray-700">
                Residential Leads
              </button>
              <button className="w-full text-left px-3 py-2 rounded text-gray-400 hover:bg-gray-700">
                High Priority
              </button>
            </div>
          </div>
        </div>

        {/* Conversation List */}
        <div className="w-96 border-r border-gray-700 bg-gray-800">
          <div className="p-4 border-b border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-gray-100"
              />
            </div>
          </div>

          <div className="overflow-auto h-[calc(100vh-73px)]">
            {/* Conversation Items */}
            <div className="p-2 space-y-2">
              <div className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">Robert Smith</div>
                    <div className="text-sm text-gray-400">Chair Repair - Houston</div>
                  </div>
                  <div className="text-sm text-gray-400">5m</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-200 rounded text-xs">Pending Quote</span>
                </div>
              </div>

              <div className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-gray-400">Table Refinishing - Dallas</div>
                  </div>
                  <div className="text-sm text-gray-400">15m</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded text-xs">Pending Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversation/Message Area */}
        <div className="flex-1 flex flex-col">
          {/* Conversation Header */}
          <div className="p-4 border-b border-gray-700 bg-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium">Robert Smith</h2>
                <div className="text-sm text-gray-400">Chair Repair - Houston</div>
              </div>
              <div className="flex gap-3">
                <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option>Pending Quote</option>
                  <option>Pending Response</option>
                  <option>Scheduled</option>
                  <option>Closed</option>
                </select>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">RS</div>
              <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <div className="text-sm text-gray-400 mb-1">Robert Smith</div>
                <div>Hi, I need someone to look at my recliner. The mechanism seems stuck.</div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-blue-600 rounded-lg p-3 max-w-[80%]">
                <div className="text-sm text-blue-200 mb-1">You</div>
                <div>
                  I'd be happy to help with your recliner issue. Could you tell me more about when this started
                  happening?
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex-shrink-0 flex items-center justify-center">JD</div>
            </div>
          </div>

          {/* Message Input Area */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="relative">
                  <textarea
                    placeholder="Type a message..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 resize-none"
                    rows={1}
                  />
                  <button
                    className="absolute right-2 top-2 px-3 py-1 bg-gray-600 rounded text-sm text-gray-300 hover:bg-gray-500"
                    onClick={() => setTemplateMenuOpen(!templateMenuOpen)}
                  >
                    Templates
                    <ChevronDown className="w-4 h-4 inline-block ml-1" />
                  </button>

                  {templateMenuOpen && (
                    <div className="absolute bottom-full mb-2 right-0 w-80 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
                      <div className="p-2">
                        <input
                          type="text"
                          placeholder="Search templates..."
                          className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                        />
                        <div className="space-y-1">
                          <div className="text-sm text-gray-400 px-2 py-1">Residential</div>
                          <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700">
                            Initial Response - Repair
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700">
                            Quote Follow-up
                          </button>
                          <div className="text-sm text-gray-400 px-2 py-1 mt-2">Commercial</div>
                          <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700">
                            Commercial Initial Response
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700">
                            Bulk Order Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Optional Info Panel */}
        <div className="w-80 border-l border-gray-700 bg-gray-800 p-4">
          <h3 className="font-medium mb-4">Customer Details</h3>

          <div className="space-y-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">Contact Information</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>(713) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>robert.smith@email.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">Service Request</div>
              <div className="font-medium">Recliner Repair</div>
              <div className="text-sm text-gray-400 mt-1">Mechanical issue - stuck mechanism</div>
            </div>

            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">Location</div>
              <div>Houston, TX</div>
              <div className="text-sm text-green-400 mt-1">In service area</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>update essential header information based on conversation</p>
            <p>Auto-Status Updates & Reminders</p>
            <p></p>
            <p>Automatic status changes based on actions (e.g., sending quote changes status to "Quote Sent")</p>
            <p>Notifications when leads haven't been responded to within set timeframes</p>
            <p>Clear visual indicators for overdue responses</p>
            <p>Automated follow-up reminders</p>
            <p></p>
            <p></p>
            <p>Template Optimization</p>
            <p></p>
            <p>Enable reps to create their own personalized templates</p>
            <p>Track which templates have highest success rates</p>
            <p>Quick-access to most used templates</p>
            <p>Allow template sharing between reps</p>
            <p>Maintain separate template sets for commercial vs residential</p>
            <p></p>
            <p></p>
            <p>Lead Distribution Safeguards</p>
            <p></p>
            <p>Automatic reassignment if no response within 24 hours</p>
            <p>"Out of Office" mode to temporarily stop receiving new leads</p>
            <p>Workload balancing based on active lead count</p>
            <p>Territory/specialty-based routing</p>
            <p>Backup rep assignment system</p>
            <p></p>
            <p></p>
            <p>Performance Tools</p>
            <p></p>
            <p>Real-time response time tracking</p>
            <p>Daily/weekly goals and progress</p>
            <p>Personal performance metrics dashboard</p>
            <p>Comparison to team averages</p>
            <p>Success rate tracking</p>
            <p></p>
            <p></p>
            <p>Communication Efficiency</p>
            <p></p>
            <p>Keyboard shortcuts for common actions</p>
            <p>Quick-reply suggestions</p>
            <p>Pre-written responses for common situations</p>
            <p>Bulk update capabilities for similar leads</p>
            <p>One-click status updates</p>
            <p></p>
            <p></p>
            <p>Training & Onboarding</p>
            <p></p>
            <p>Template usage guides</p>
            <p>Common scenario playbooks</p>
            <p>Best practices documentation</p>
            <p>Sample responses for different situations</p>
            <p>Clear process workflows</p>
            <p></p>
            <p></p>
            <p>Quality Control</p>
            <p></p>
            <p>Response review before sending quotes</p>
            <p>Territory verification before assignment</p>
            <p>Out-of-area lead detection</p>
            <p>Required fields for critical information</p>
            <p>Photo/attachment organization</p>
            <p></p>
            <p></p>
            <p></p>
            <p>
              The manager specifically mentioned wanting to prevent leads falling through cracks and maintaining
              response times, so I'd particularly emphasize:
            </p>
            <p></p>
            <p>Clear visual indicators for response deadlines</p>
            <p>Automated escalation for overdue leads</p>
            <p>Easy status tracking and updates</p>
            <p>Quick access to templates</p>
            <p>Real-time performance metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationWorkspace;
