import React, { useState } from 'react'
import Sidebar from '../organisms/Sidebar'
import TopBar from '../organisms/TopBar'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100 font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
           <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
           {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
