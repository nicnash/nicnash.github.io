"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  CalendarCheck,
  ClipboardCheck,
  Package,
  CheckCircle2,
  Mail,
  Wrench,
  Phone,
  MessageCircle,
  Image,
} from "lucide-react";

const LeadListTimeline = () => {
  const statusStages = [
    {
      key: "New Lead",
      icon: Mail,
      description: "Lead received and awaiting initial review",
    },
    {
      key: "Initial Contact",
      icon: MessageSquare,
      description: "First contact made with customer",
    },
    {
      key: "Quote Sent",
      icon: ClipboardCheck,
      description: "Quote prepared and sent to customer",
    },
    {
      key: "Inspection Scheduled",
      icon: CalendarCheck,
      description: "On-site inspection appointment scheduled",
    },
    {
      key: "Parts Ordered",
      icon: Package,
      description: "Required parts ordered and awaiting delivery",
    },
    {
      key: "Repair Scheduled",
      icon: Wrench,
      description: "Final repair appointment scheduled",
    },
    {
      key: "Complete",
      icon: CheckCircle2,
      description: "All work completed and payment received",
    },
  ];

  // Generate sample communications
  const generateCommunications = () => {
    const types = [
      { type: "email", icon: Mail, color: "text-blue-400" },
      { type: "phone", icon: Phone, color: "text-green-400" },
      { type: "text", icon: MessageCircle, color: "text-purple-400" },
      { type: "photo", icon: Image, color: "text-yellow-400" },
    ];

    return Array.from({ length: Math.floor(Math.random() * 5) + 2 }, () => ({
      type: types[Math.floor(Math.random() * types.length)],
      timestamp: Math.floor(Math.random() * 72),
      message: "Sample communication message",
      from: Math.random() > 0.5 ? "Customer" : "Rep",
    }));
  };

  // Generate sample data
  const generateSampleLeads = () => {
    const types = ["Residential", "Commercial"];
    const values = ["$350", "$450", "$800", "$1,200", "$2,800", "$3,500"];
    const statuses = statusStages.map((s) => s.key);

    return Array.from({ length: 22 }, (_, i) => ({
      id: i + 1,
      customer: `Customer ${i + 1}`,
      currentStatus: statuses[Math.floor(Math.random() * (statuses.length - 1))],
      timeInStatus: Math.floor(Math.random() * 72),
      type: types[Math.floor(Math.random() * types.length)],
      value: values[Math.floor(Math.random() * values.length)],
      communications: generateCommunications(),
      timeline: statuses.reduce((acc, status) => {
        const statusIndex = statuses.indexOf(status);
        const currentIndex = statuses.indexOf(statuses[Math.floor(Math.random() * (statuses.length - 1))]);
        acc[status] = {
          complete: statusIndex <= currentIndex,
          duration: statusIndex <= currentIndex ? Math.floor(Math.random() * 72) : null,
        };
        return acc;
      }, {}),
    }));
  };

  const [leads] = useState(generateSampleLeads());
  const getTimelinePosition = (timestamp, totalDuration) => {
    const percentage = (timestamp / totalDuration) * 100;
    return `${percentage}%`;
  };
  const getStatusColor = (duration, isBeforeCurrent) => {
    if (!duration) return "bg-gray-700";
    if (isBeforeCurrent) return "bg-gray-600 opacity-40"; // Dim completed stages
    if (duration <= 24) return "bg-blue-500";
    if (duration <= 48) return "bg-indigo-500";
    return "bg-purple-500";
  };

  const getIconColor = (stageInfo, isBeforeCurrent) => {
    if (!stageInfo?.complete) return "text-gray-600";
    if (isBeforeCurrent) return "text-gray-400"; // Dim completed stage icons
    if (stageInfo.duration <= 24) return "text-blue-500";
    if (stageInfo.duration <= 48) return "text-indigo-500";
    return "text-purple-500";
  };

  return (
    <Card className="w-full max-w-6xl bg-gray-900 text-gray-100">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Active Leads</span>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-300">&lt;24h</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <span className="text-gray-300">24-48h</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-300">&gt;48h</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.map((lead) => {
            const currentStageIndex = statusStages.findIndex((stage) => stage.key === lead.currentStatus);

            return (
              <div key={lead.id} className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-100">{lead.customer}</h3>
                    <div className="text-sm text-gray-400">
                      {lead.type} • {lead.value}
                    </div>
                  </div>
                  <Badge
                    className={`
                  ${
                    lead.timeInStatus > 48
                      ? "bg-purple-900/50 text-purple-200"
                      : lead.timeInStatus > 24
                      ? "bg-indigo-900/50 text-indigo-200"
                      : "bg-blue-900/50 text-blue-200"
                  }
                `}
                  >
                    {lead.timeInStatus}h in {lead.currentStatus}
                  </Badge>
                </div>

                {/* Timeline Bar with Icons and Communication Markers */}
                <div className="relative mt-6 mb-4">
                  {/* Progress Bar Segments */}
                  <div className="flex h-2 w-full">
                    {statusStages.map((stage, index) => {
                      const stageInfo = lead.timeline[stage.key];
                      const width = `${100 / statusStages.length}%`;
                      const isBeforeCurrent = index < currentStageIndex;

                      return (
                        <div
                          key={stage.key}
                          className={`${getStatusColor(stageInfo?.duration, isBeforeCurrent)} 
                          ${index === 0 ? "rounded-l" : ""} 
                          ${index === statusStages.length - 1 ? "rounded-r" : ""}
                          ${!stageInfo?.complete ? "opacity-30" : ""}
                          transition-colors relative
                        `}
                          style={{ width }}
                        />
                      );
                    })}
                  </div>

                  {/* Communication Markers */}
                  <div className="absolute bottom-2 w-full">
                    {lead.communications.map((comm, index) => {
                      const CommIcon = comm.type.icon;
                      const markerPosition = getTimelinePosition(comm.timestamp, 72);
                      const currentPosition = ((currentStageIndex + 1) / statusStages.length) * 100;
                      const isBeforeCurrent = parseFloat(markerPosition) < currentPosition;

                      return (
                        <div
                          key={index}
                          className="absolute group"
                          style={{
                            left: markerPosition,
                            transform: "translateX(-50%)",
                          }}
                        >
                          {/* Vertical line */}
                          <div
                            className={`w-px h-4 ${isBeforeCurrent ? "bg-gray-500 opacity-40" : "bg-gray-500"}`}
                          ></div>
                          {/* Icon */}
                          <div className="w-4 h-4 -mt-1 flex items-center justify-center">
                            <CommIcon className={`w-3 h-3 ${isBeforeCurrent ? "opacity-40" : ""} ${comm.type.color}`} />
                          </div>

                          {/* Tooltip */}
                          <div
                            className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 
                          opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
                          >
                            <div className="bg-gray-800 text-gray-100 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                              <div className="font-medium">{comm.type.type}</div>
                              <div className="text-gray-400">From: {comm.from}</div>
                              <div className="text-gray-400">{comm.timestamp}h ago</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stage Icons */}
                  <div className="absolute -top-4 w-full flex justify-between px-2">
                    {statusStages.map((stage, index) => {
                      const StageIcon = stage.icon;
                      const stageInfo = lead.timeline[stage.key];
                      const isCurrentStage = lead.currentStatus === stage.key;
                      const isBeforeCurrent = index < currentStageIndex;

                      return (
                        <div key={stage.key} className="group relative">
                          <div
                            className={`
                          w-6 h-6 rounded-full bg-gray-900 
                          flex items-center justify-center
                          ${isCurrentStage ? "ring-2 ring-blue-500" : ""}
                          transition-all
                        `}
                          >
                            <StageIcon className={`w-4 h-4 ${getIconColor(stageInfo, isBeforeCurrent)}`} />
                          </div>

                          {/* Stage Tooltip */}
                          <div
                            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                          opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                          >
                            <div className="bg-gray-800 text-gray-100 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                              <div className="font-medium">{stage.key}</div>
                              <div className="text-gray-400 text-xs">{stage.description}</div>
                              {stageInfo?.duration && (
                                <div className="text-xs mt-1">Time in stage: {stageInfo.duration}h</div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Labels */}
                <div className="flex text-xs text-gray-500 justify-between px-2">
                  {statusStages.map((stage, index) => (
                    <div key={stage.key} className="text-center w-6">
                      {lead.timeline[stage.key]?.duration || ""}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadListTimeline;
