import React from 'react';

export default function InternshipCard({ id, title, company, status, appliedDate, onViewDetails }) {
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'bg-[#6B1B1B]/10 text-[#6B1B1B]';
      case 'reviewed':
        return 'bg-[#C4860A]/10 text-[#C4860A]';
      case 'pending':
      default:
        return 'bg-[#6B7280]/10 text-[#6B7280]';
    }
  };

  return (
    <div className="group bg-surface-container-lowest border border-outline-variant rounded-DEFAULT border-l-4 border-l-secondary-container hover:border-l-primary hover:bg-surface-container-low/30 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">{title}</h3>
          <span className={`inline-block px-2 py-0.5 rounded-sm font-label-sm text-label-sm uppercase tracking-wider ${getStatusStyle(status)}`}>
            {status}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">{company}</p>
      </div>
      {appliedDate && (
        <div className="flex flex-col md:items-end gap-1">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Applied: <span className="font-label-md text-label-md text-on-surface font-normal">{appliedDate}</span>
          </p>
        </div>
      )}
      <div className="mt-4 md:mt-0 md:ml-8 border-t border-outline-variant md:border-none pt-4 md:pt-0">
        <button 
          onClick={onViewDetails}
          className="w-full md:w-auto px-4 py-2 border border-primary text-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary/5 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
