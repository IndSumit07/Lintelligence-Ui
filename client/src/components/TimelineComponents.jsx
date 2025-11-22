import React from "react";
import { Calendar, Clock, MapPin, Users, Video, Phone, Mail, FileText } from "lucide-react";

export const SimpleTimelineItem = ({ customStyle }) => {
  return (
    <div className="flex gap-4" style={customStyle}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
          <Clock size={18} className="text-orange-400" />
        </div>
        <div className="w-0.5 h-full bg-white/10 mt-2" />
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-white font-michroma text-sm">Project Started</h4>
          <span className="text-white/40 font-space text-xs">2 hours ago</span>
        </div>
        <p className="text-white/60 font-space text-sm">
          New project has been initialized and team members have been assigned.
        </p>
      </div>
    </div>
  );
};

export const DetailedTimeline = ({ customStyle }) => {
  const events = [
    {
      icon: <Video size={18} className="text-blue-400" />,
      title: "Team Meeting",
      time: "10:00 AM",
      description: "Weekly sync with the development team",
      color: "blue"
    },
    {
      icon: <FileText size={18} className="text-green-400" />,
      title: "Document Review",
      time: "2:00 PM",
      description: "Review and approve project documentation",
      color: "green"
    },
    {
      icon: <Phone size={18} className="text-purple-400" />,
      title: "Client Call",
      time: "4:30 PM",
      description: "Discuss project requirements and timeline",
      color: "purple"
    }
  ];

  return (
    <div className="space-y-0" style={customStyle}>
      {events.map((event, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full bg-${event.color}-500/20 border-2 border-${event.color}-500 flex items-center justify-center`}>
              {event.icon}
            </div>
            {index < events.length - 1 && <div className="w-0.5 flex-1 bg-white/10 my-2" />}
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-white font-michroma text-sm">{event.title}</h4>
              <span className="text-white/40 font-space text-xs">{event.time}</span>
            </div>
            <p className="text-white/60 font-space text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const HorizontalTimeline = ({ customStyle }) => {
  const steps = [
    { label: "Order Placed", completed: true },
    { label: "Processing", completed: true },
    { label: "Shipped", completed: true },
    { label: "Delivered", completed: false }
  ];

  return (
    <div className="max-w-2xl" style={customStyle}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              {index > 0 && (
                <div className={`flex-1 h-0.5 ${step.completed ? "bg-orange-500" : "bg-white/10"}`} />
              )}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed
                    ? "bg-orange-500 border-2 border-orange-500"
                    : "bg-white/5 border-2 border-white/20"
                }`}
              >
                {step.completed ? (
                  <Clock size={18} className="text-white" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 ${steps[index + 1].completed ? "bg-orange-500" : "bg-white/10"}`} />
              )}
            </div>
            <p className={`mt-3 font-space text-xs text-center ${step.completed ? "text-white" : "text-white/40"}`}>
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ActivityTimeline = ({ customStyle }) => {
  const activities = [
    {
      user: "John Doe",
      action: "commented on",
      target: "Design Review",
      time: "5 min ago",
      avatar: "JD"
    },
    {
      user: "Sarah Smith",
      action: "uploaded",
      target: "Final Mockups",
      time: "1 hour ago",
      avatar: "SS"
    },
    {
      user: "Mike Johnson",
      action: "completed",
      target: "Development Phase",
      time: "3 hours ago",
      avatar: "MJ"
    }
  ];

  return (
    <div className="space-y-0 max-w-md" style={customStyle}>
      {activities.map((activity, index) => (
        <div key={index} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-michroma text-xs">
              {activity.avatar}
            </div>
            {index < activities.length - 1 && <div className="w-0.5 flex-1 bg-white/10 my-2" />}
          </div>
          <div className="flex-1 pb-6">
            <p className="text-white/70 font-space text-sm mb-1">
              <span className="text-white font-semibold">{activity.user}</span>{" "}
              {activity.action}{" "}
              <span className="text-orange-400">{activity.target}</span>
            </p>
            <span className="text-white/40 font-space text-xs">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MilestoneTimeline = ({ customStyle }) => {
  const milestones = [
    {
      title: "Project Kickoff",
      date: "Jan 15, 2024",
      status: "completed",
      description: "Initial planning and team formation"
    },
    {
      title: "Design Phase",
      date: "Feb 1, 2024",
      status: "completed",
      description: "UI/UX design and prototyping"
    },
    {
      title: "Development",
      date: "Mar 1, 2024",
      status: "in-progress",
      description: "Building core features and functionality"
    },
    {
      title: "Testing & Launch",
      date: "Apr 15, 2024",
      status: "upcoming",
      description: "QA testing and production deployment"
    }
  ];

  return (
    <div className="space-y-0 max-w-lg" style={customStyle}>
      {milestones.map((milestone, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                milestone.status === "completed"
                  ? "bg-green-500/20 border-2 border-green-500"
                  : milestone.status === "in-progress"
                  ? "bg-orange-500/20 border-2 border-orange-500"
                  : "bg-white/5 border-2 border-white/20"
              }`}
            >
              <Calendar
                size={20}
                className={
                  milestone.status === "completed"
                    ? "text-green-400"
                    : milestone.status === "in-progress"
                    ? "text-orange-400"
                    : "text-white/40"
                }
              />
            </div>
            {index < milestones.length - 1 && <div className="w-0.5 flex-1 bg-white/10 my-2" />}
          </div>
          <div className="flex-1 pb-8">
            <div className="card-base rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-michroma text-sm">{milestone.title}</h4>
                <span
                  className={`px-2 py-1 rounded text-xs font-space ${
                    milestone.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : milestone.status === "in-progress"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  {milestone.status}
                </span>
              </div>
              <p className="text-white/40 font-space text-xs mb-2">{milestone.date}</p>
              <p className="text-white/60 font-space text-sm">{milestone.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
