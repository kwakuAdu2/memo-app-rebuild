import React from 'react'

const DashboardAction = ({ icon, text }) => {
  return (
    <div className='dashboard-action flex flex-col justify-center items-center bg-gray-200 '>
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  )
}

export default DashboardAction
