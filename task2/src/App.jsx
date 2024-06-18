import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardCard = ({ title, total, yesterday, percentage, icon, bgColor }) => (
  <div className={`rounded-lg p-4 shadow-md ${bgColor}`}>
    <div className="flex items-start justify-between">
      <div className="text-3xl">{icon}</div>
      <div className="text-lg font-bold text-white">{title}</div>
    </div>
    <div className="mt-4">
      <div className="text-4xl font-bold text-white">{total}</div>
      <div className="text-lg text-white">Total</div>
      <div className="flex items-center mt-2 text-white">
        <div className="mr-2">{yesterday} Yesterday</div>
        <div>({percentage})</div>
      </div>
    </div>
  </div>
);

const UserList = ({ users }) => (
  <div className="mt-4">
    {users.map((user, index) => (
      <div key={index} className="bg-[#2A2E5E] border border-gray-300 rounded-md p-2 m-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="block w-2 h-full bg-green-500 mr-2"></span>
          <span className="text-white font-bold">{user.name}</span>
        </div>
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
    { title: 'Doctor Visited', total: 44, yesterday: 30, percentage: '31.82%', icon: '🩺', bgColor: 'bg-[#00A3FF]' },
    { title: 'Chemist Visited', total: 0, yesterday: 0, percentage: '0%', icon: '💊', bgColor: 'bg-[#504D7E]' },
    { title: 'Stockist Visited', total: 1, yesterday: 5, percentage: '-100%', icon: '🩹', bgColor: 'bg-[#504D7E]' },
    { title: 'Total POB', total: 0, yesterday: 0, percentage: '0%', icon: '💵', bgColor: 'bg-[#00417F]' },
    { title: 'Total Samples', total: 0, yesterday: 0, percentage: '0%', icon: '💊', bgColor: 'bg-[#00A3FF]' },
    { title: 'Total Gifts', total: 0, yesterday: 0, percentage: '0%', icon: '🎁', bgColor: 'bg-[#504D7E]' },
  ];

  const users = [
    { name: 'Ajay Kanojia', status: 3 },
    { name: 'Abhishek Pandey', status: 1 },
    { name: 'Shubham Agrawal', status: 2 },
  ];

  return (
    <div className="bg-[#25253D] w-full min-h-screen">
      <header className="bg-[#2A2E5E] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">Daily Call Report</div>
          <div className="flex items-center space-x-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="p-2 rounded-md border border-gray-300 text-gray-900"
              calendarClassName="bg-gray-200 text-gray-900"
              dayClassName={() => 'hover:bg-blue-500'}
              todayButton="Today"
              todayButtonClassName="bg-blue-500 text-white p-2 rounded-md"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">Today</button>
          </div>
        </div>
        <p className="text-green-300 mt-2">
          Note: Today's reports are directly being fetched from the User Portal & can change if the user decides to delete an entry. The numbers will be fixed once the call reports are approved.
        </p>
      </header>
      <main className="p-4">
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
