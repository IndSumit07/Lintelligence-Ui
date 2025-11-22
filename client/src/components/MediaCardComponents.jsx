import React from "react";
import { Image, Video, Music, FileText, Download, Share2, MoreVertical, Play, Pause } from "lucide-react";

export const ImageMediaCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden max-w-sm" style={customStyle}>
      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
        <Image size={48} className="text-white/40" />
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
            <Download size={16} className="text-white" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors">
            <Share2 size={16} className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-michroma text-sm mb-1">Mountain Landscape</h4>
        <p className="text-white/60 font-space text-xs mb-3">1920 x 1080 • 2.4 MB</p>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-space">Nature</span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-space">HD</span>
        </div>
      </div>
    </div>
  );
};

export const VideoMediaCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden max-w-sm" style={customStyle}>
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group cursor-pointer">
        <Video size={48} className="text-white/40" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white font-space text-xs">
          5:42
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-michroma text-sm mb-1">Product Demo</h4>
        <p className="text-white/60 font-space text-xs mb-3">1080p • 45.2 MB</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-space">Tutorial</span>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const AudioMediaCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-4 max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
          <Music size={28} className="text-orange-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-michroma text-sm mb-1">Summer Vibes</h4>
          <p className="text-white/60 font-space text-xs">Electronic • 3:45</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors">
          <Play size={18} className="text-white ml-0.5" />
        </button>
      </div>
      <div className="space-y-2">
        <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full" style={{ width: "45%" }} />
        </div>
        <div className="flex items-center justify-between text-xs font-space text-white/40">
          <span>1:41</span>
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
};

export const DocumentMediaCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl p-4 max-w-sm hover:border-orange-500/50 transition-all cursor-pointer" style={customStyle}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
          <FileText size={24} className="text-blue-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-michroma text-sm mb-1">Project Proposal.pdf</h4>
          <p className="text-white/60 font-space text-xs mb-3">PDF Document • 1.2 MB</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-orange-500 text-white rounded-lg font-space text-xs hover:bg-orange-600 transition-colors flex items-center gap-1">
              <Download size={14} />
              Download
            </button>
            <button className="px-3 py-1.5 bg-white/5 text-white rounded-lg font-space text-xs hover:bg-white/10 transition-colors flex items-center gap-1">
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GalleryMediaCard = ({ customStyle }) => {
  return (
    <div className="card-base rounded-xl overflow-hidden max-w-sm" style={customStyle}>
      <div className="grid grid-cols-2 gap-1">
        <div className="h-32 bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
          <Image size={32} className="text-white/40" />
        </div>
        <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <Image size={32} className="text-white/40" />
        </div>
        <div className="h-32 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
          <Image size={32} className="text-white/40" />
        </div>
        <div className="h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center relative">
          <Image size={32} className="text-white/40" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-michroma text-xl">+12</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-michroma text-sm mb-1">Photo Collection</h4>
        <p className="text-white/60 font-space text-xs">16 items • Updated 2 days ago</p>
      </div>
    </div>
  );
};

export const PlaylistMediaCard = ({ customStyle }) => {
  const tracks = [
    { title: "Midnight Dreams", duration: "3:42" },
    { title: "Ocean Waves", duration: "4:15" },
    { title: "City Lights", duration: "3:28" }
  ];

  return (
    <div className="card-base rounded-xl p-4 max-w-sm" style={customStyle}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
          <Music size={28} className="text-purple-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-michroma text-sm mb-1">Chill Vibes</h4>
          <p className="text-white/60 font-space text-xs">12 tracks • 48 min</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {tracks.map((track, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0">
              <Play size={14} className="text-white/60 ml-0.5" />
            </div>
            <div className="flex-1">
              <p className="text-white font-space text-xs">{track.title}</p>
            </div>
            <span className="text-white/40 font-space text-xs">{track.duration}</span>
          </div>
        ))}
      </div>
      <button className="btn-primary w-full py-2 rounded-lg font-space text-sm">
        Play All
      </button>
    </div>
  );
};
