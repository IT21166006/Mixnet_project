import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';

import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function AnalyticsDashboard() {

  const data = [
    { name: 'Semester 1', ta: 4000, ca: 2400, amt: 2400 },
    { name: 'Semester 2', ta: 3000, ca: 1398, amt: 2210 },
    { name: 'Semester 3', ta: 2000, ca: 9800, amt: 2290 },
    { name: 'Semester 4', ta: 2780, ca: 3908, amt: 2000 },  
    { name: 'Semester 5', ta: 1890, ca: 4800, amt: 2181 },
    { name: 'Semester 6', ta: 2390, ca: 3800, amt: 2500 },
    { name: 'Semester 7', ta: 3490, ca: 4300, amt: 2100 },
];

  return (
      <div>
      <ProfileSidebar/>
      <div className="content-con"> {/* this div tag Profileview also */}
      <div>
            <main className='main-container'>
                <div className='main-title'>
                    <h3>Analytics Dashboard</h3>
                </div>

                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Total Assignments</h3>
                            <BsFillArchiveFill className='card_icon' />
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Completed Assignment</h3>
                            <BsFillGrid3X3GapFill className='card_icon' />
                        </div>
                        <h1>12</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Pending Assignment</h3>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <h1>33</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Summery</h3>
                            <BsFillBellFill className='card_icon' />
                        </div>
                        <h1>42</h1>
                    </div>
                </div>

                <div className='charts'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="ca" fill="#8884d8" />
                            <Bar dataKey="ta" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ca" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="ta" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </main>
        </div>
      </div>
      
      </div>
  )
}
