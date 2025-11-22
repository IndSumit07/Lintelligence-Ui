import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simple Pagination
export const SimplePagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex items-center gap-2" style={customStyle}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft size={18} />
      </button>
      
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded-lg font-space text-sm transition-all ${
            currentPage === index + 1
              ? 'bg-orange-500 text-black font-semibold'
              : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

// Pagination with Info
export const InfoPagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const itemsPerPage = 20;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl" style={customStyle}>
      <p className="text-white/60 font-space text-sm">
        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, 200)} of 200 results
      </p>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 font-space text-sm hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        
        <div className="flex items-center gap-1">
          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const pageNum = currentPage <= 3 
              ? index + 1 
              : currentPage >= totalPages - 2 
              ? totalPages - 4 + index 
              : currentPage - 2 + index;
            
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-lg font-space text-sm transition-all ${
                  currentPage === pageNum
                    ? 'bg-orange-500 text-black font-semibold'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 font-space text-sm hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Compact Pagination
export const CompactPagination = ({ customStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <div className="flex items-center gap-3" style={customStyle}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="btn-secondary px-4 py-2 rounded-lg font-space text-sm disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} className="inline mr-1" />
        Prev
      </button>
      
      <div className="card-base px-4 py-2 rounded-lg">
        <span className="text-white font-space text-sm">
          Page <span className="text-orange-400 font-semibold">{currentPage}</span> of {totalPages}
        </span>
      </div>
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="btn-secondary px-4 py-2 rounded-lg font-space text-sm disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight size={16} className="inline ml-1" />
      </button>
    </div>
  );
};
