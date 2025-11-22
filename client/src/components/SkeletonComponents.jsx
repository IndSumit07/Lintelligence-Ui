import React from "react";

// Simple Skeleton
export const SimpleSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-md space-y-4" style={customStyle}>
      <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
      <div className="h-4 bg-white/10 rounded-lg animate-pulse w-5/6" />
      <div className="h-4 bg-white/10 rounded-lg animate-pulse w-4/6" />
    </div>
  );
};

// Card Skeleton
export const CardSkeleton = ({ customStyle }) => {
  return (
    <div className="card-base rounded-2xl p-6 w-full max-w-sm" style={customStyle}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
          <div className="h-3 bg-white/10 rounded animate-pulse w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-white/10 rounded animate-pulse" />
        <div className="h-3 bg-white/10 rounded animate-pulse w-5/6" />
        <div className="h-3 bg-white/10 rounded animate-pulse w-4/6" />
      </div>
    </div>
  );
};

// List Skeleton
export const ListSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-md space-y-3" style={customStyle}>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="card-base rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Profile Skeleton
export const ProfileSkeleton = ({ customStyle }) => {
  return (
    <div className="card-base rounded-2xl p-8 w-full max-w-md" style={customStyle}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-white/10 rounded-full animate-pulse mb-4" />
        <div className="h-6 bg-white/10 rounded animate-pulse w-32 mb-2" />
        <div className="h-4 bg-white/10 rounded animate-pulse w-48 mb-6" />
        
        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-white/10 rounded animate-pulse w-20" />
            <div className="h-4 bg-white/10 rounded animate-pulse w-32" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-white/10 rounded animate-pulse w-24" />
            <div className="h-4 bg-white/10 rounded animate-pulse w-28" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-white/10 rounded animate-pulse w-16" />
            <div className="h-4 bg-white/10 rounded animate-pulse w-36" />
          </div>
        </div>
        
        <div className="w-full h-10 bg-white/10 rounded-lg animate-pulse mt-6" />
      </div>
    </div>
  );
};

// Table Skeleton
export const TableSkeleton = ({ customStyle }) => {
  return (
    <div className="w-full max-w-3xl" style={customStyle}>
      <div className="card-base rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-white/10">
          <div className="h-4 bg-white/10 rounded animate-pulse w-32" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-40" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-24" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-28" />
        </div>
        
        {/* Rows */}
        {[1, 2, 3, 4, 5].map((row) => (
          <div key={row} className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0">
            <div className="h-3 bg-white/10 rounded animate-pulse w-32" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-40" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-24" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};
