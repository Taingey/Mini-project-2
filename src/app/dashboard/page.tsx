"use client"
import React from 'react'
import UserTables from '../tables/UserTables';
const Dashboard = () => {
  return (
    <div className='w-full'>
      <h1 className="font-bold text-center mt-6 mb-6 text-[25px]">User Data</h1>
      <UserTables />
    </div>
  )
}

export default Dashboard;
