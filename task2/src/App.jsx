import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardCard = ({ title, total, yesterday, percentage, icon }) => (
  <div className="bg-blue-200 rounded-lg p-4 shadow-md">
    <div className="flex items-center justify-between">
      <div className="text-3xl">{icon}</div>
      <div className="text-lg font-bold">{title}</div>
    </div>
    <div className="mt-4">
      <div className="text-lg font-bold">{total} Total</div>
      <div className="flex items-center mt-2 text-gray-700">
        <div className="mr-4">{yesterday} Yesterday</div>
        <div>({percentage})</div>
      </div>
    </div>
  </div>
);



const UserList = ({ users }) => (
  <div className="mt-4">
    {users.map((user, index) => (
      <div key={index} className="bg-white border border-gray-300 rounded-md p-2 m-2 flex justify-between items-center">
        <span className="font-bold">{user.name}</span>
        <span className={`px-2 py-1 rounded-full ${user.status === 3 ? 'bg-green-500' : user.status === 2 ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>
          {user.status}
        </span>
      </div>
    ))}
  </div>
);

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

  const cards = [
    { title: 'Doctor Visited', total: 44, yesterday: 30, percentage: '31.82%', icon: '🩺' },
    { title: 'Chemist Visited', total: 0, yesterday: 0, percentage: '0%', icon: '💊' },
    { title: 'Stockist Visited', total: 1, yesterday: 5, percentage: '-100%', icon: '🩹' },
    { title: 'Total POB', total: 0, yesterday: 0, percentage: '0%', icon: '💵' },
    { title: 'Total Samples', total: 0, yesterday: 0, percentage: '0%', icon: '💊' },
    { title: 'Total Gifts', total: 0, yesterday: 0, percentage: '0%', icon: '🎁' },
  ];

  const users = [
    { name: 'Ajay Kanojia', status: 3 },
    { name: 'Abhishek Pandey', status: 1 },
    { name: 'Shubham Agrawal', status: 2 },
  ];

  return (
    
    <div className=" bg-[#25253D] w-full h-screen ">
      <header className="bg-blue-800 text-white p-4 rounded-md">
        <h1 className="text-xl">Daily Call Report</h1>
      </header>
      <main className="p-4">
        <div className="flex items-center justify-center mt-4">
          <span className="mr-2 text-white">Choose Date:</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-2 rounded-md border border-gray-300 text-gray-900"
            calendarClassName="bg-gray-200 text-gray-900"
            dayClassName={() => 'hover:bg-blue-500'}
            todayButton="Today"
            todayButtonClassName="bg-blue-500 text-white p-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {cards.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
        <UserList users={users} />
      </main>
    </div>
  );
};

export default App;
