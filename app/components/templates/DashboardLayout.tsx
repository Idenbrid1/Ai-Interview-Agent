'use client'

import React, { useState } from 'react'
import Sidebar from '../organisms/Sidebar'
import TopBar from '../organisms/TopBar'
import { cn } from '@/lib/utils'

export interface DashboardLayoutProps {
  children: React.ReactNode
  contractPlanName?: string
  sidebarConfig?: {
    navItems?: any[]
    footerItems?: any[]
    bottomItems?: any[]
    logo?: any
  }
  topBarConfig?: {
    title?: string
    profile?: any
  }
  className?: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  contractPlanName,
  sidebarConfig,
  topBarConfig,
  className,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className={cn('flex h-screen w-screen overflow-hidden bg-gray-100 font-sans', className)}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        {...sidebarConfig}
      />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
          <TopBar 
            onMenuClick={() => setIsSidebarOpen(true)} 
            contractPlanName={contractPlanName}
            {...topBarConfig}
          />
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
