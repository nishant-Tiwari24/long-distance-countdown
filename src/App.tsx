import React, { useState } from 'react';
import Timer from './components/Timer';
import Navbar from './components/Navbar';
import Leaves from './components/Leaves';

const App = () => {
  const [targetDate, setTargetDate] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(event.target.value);
  };

  return (

    <div className='w-full h-screen fixed bg-[radial-gradient(#333,#000)]'>
      <Navbar/>
      <div className='flex gap-4 justify-end align-middle mt-5 mr-5 '>
      <label className="text-red-200 text-1xl font-serif" htmlFor="targetDate">Enter Target Date: </label>
      <input className="bg-red-200 rounded-[4px] h-6 w-30 hover:border-red-600 :text-zinc-500 type:font-sans placeholder:font-semibold border-red-300 border-[2px] border-solid" placeholder='Select date' id="targetDate" type='date' value={targetDate} onChange={handleDateChange} />
      </div>
      <Timer targetDate={targetDate} />
      <Leaves/>
    </div>
  );
};

export default App;
