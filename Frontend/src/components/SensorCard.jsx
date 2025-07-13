import React from 'react';

const SensorCard = ({ label, value, highlight }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md backdrop-blur-md border ${highlight ? 'border-red-500' : 'border-white/10'} bg-white/10`}>
      <h2 className="text-lg font-semibold capitalize text-white">{label}</h2>
      <p className={`text-2xl font-bold ${highlight ? 'text-red-500' : 'text-white'}`}>
        {value} {label === 'temperature' ? '°C' : label === 'vibration' ? 'mm/s' : label === 'current' ? 'A' : 'V'}
      </p>
    </div>
  );
};

export default SensorCard;
