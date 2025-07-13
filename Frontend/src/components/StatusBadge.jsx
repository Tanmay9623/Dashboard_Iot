import React from 'react';

const StatusBadge = ({ status }) => {
  const statusColor = {
    Healthy: 'bg-green-500',
    Warning: 'bg-yellow-400',
    Critical: 'bg-red-600',
  };

  return (
    <div className="p-6 rounded-xl shadow-md backdrop-blur-md border border-white/10 bg-white/10 flex flex-col items-center">
      <h2 className="text-lg font-semibold text-white">Machine Status</h2>
      <span className={`mt-2 px-4 py-2 rounded-full font-bold text-white ${statusColor[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
