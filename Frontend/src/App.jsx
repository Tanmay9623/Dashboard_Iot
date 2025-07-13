import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import './index.css';  


 
import SensorCard from './components/SensorCard';
import StatusBadge from './components/StatusBadge';
import LineChartGraph from './components/LineChartGraph';
 
function App() {
  const [data, setData] = useState(null);            
  const [history, setHistory] = useState([]);     
  const [theme, setTheme] = useState('dark');      

  // Fetch data from Express API
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/sensor-data');
      const newData = res.data;

      setData(newData);
      setHistory(prev => [...prev.slice(-9), {
        ...newData,
        time: new Date().toLocaleTimeString()   
      }]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
   


  useEffect(() => {  
    const interval = setInterval(fetchData, 5000); 
    return () => clearInterval(interval);  
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

useEffect(() => {
  document.body.className = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
}, [theme]);



  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all min-h-screen font-inter relative`}>
 
      
        

        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-teal-400 text-transparent bg-clip-text drop-shadow-lg">
            MachineWise Monitor
          </h1>
          <p className="text-gray-400 mt-2">Industrial IoT Dashboard with Real-time Monitoring</p>
        </header>

 
        {data && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl mb-10">
            <SensorCard label="temperature" value={data.temperature} highlight={data.temperature > 80} />
            <SensorCard label="vibration" value={data.vibration} highlight={data.vibration > 20} />
            <SensorCard label="current" value={data.current} highlight={false} />
            <SensorCard label="voltage" value={data.voltage} highlight={false} />
            <StatusBadge status={data.status} />
          </div>
        )}

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <LineChartGraph data={history} metric="temperature" />
          <LineChartGraph data={history} metric="vibration" />
        </div>
      </div>
     
  );
}

export default App;
