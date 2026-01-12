'use client'

import React from 'react'
import { 
  LayoutDashboard, 
  Home,
  MessageSquare, 
  FileText, 
  Briefcase, 
  Building2,
  Search,
  User,
  FileCheck,
  Users,
  Mail,
  Settings, 
  LogOut, 
  Shield,
  LucideIcon
} from 'lucide-react'
import NavItem from '../molecules/NavItem'
import { cn } from '@/lib/utils'

export interface NavItemConfig {
  icon?: LucideIcon
  label: string
  active?: boolean
  badge?: number
  onClick?: () => void
}

export interface SidebarProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  logo?: {
    text?: string
    subtext?: string
    icon?: React.ReactNode
  }
  navItems?: NavItemConfig[]
  footerItems?: NavItemConfig[]
  bottomItems?: NavItemConfig[]
}

const defaultNavItems: NavItemConfig[] = [
  { icon: LayoutDashboard, label: 'ダッシュボード', active: true },
  { icon: Home, label: 'トップページ' },
  { icon: MessageSquare, label: 'メッセージ' },
  { icon: FileText, label: '面談レポート' },
  { icon: Briefcase, label: '面接対策' },
  { icon: Building2, label: 'おすすめ企業' },
  { icon: Search, label: '企業分析' },
  { icon: User, label: '自己分析/適職診断' },
  { icon: Mail, label: 'オリジナルキャリアレポート' },
  { icon: FileCheck, label: '履歴書・職務経歴書' },
  { icon: User, label: 'プロフィール' },
  { icon: Users, label: '友達紹介' },
]

const defaultFooterItems: NavItemConfig[] = [
  { icon: Settings, label: '設定' },
  { icon: LogOut, label: 'ログアウト' },
]

const defaultBottomItems: NavItemConfig[] = [
  { icon: FileCheck, label: '利用規約' },
  { icon: Shield, label: 'プライバシーポリシー' },
  { icon: Building2, label: '会社情報' },
]

const Sidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  isOpen, 
  onClose,
  logo,
  navItems = defaultNavItems,
  footerItems = defaultFooterItems,
  bottomItems = defaultBottomItems,
}) => {
  const defaultLogo = {
    text: 'ai転職なら',
    subtext: 'ichap',
    icon: (
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e2538] font-bold text-xl">
        AI
      </div>
    ),
  }

  const logoConfig = { ...defaultLogo, ...logo }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <div className={cn(
        'fixed lg:static inset-y-0 left-0 z-30',
        'w-64 bg-[#1e2538] text-white flex flex-col h-full',
        'transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        className
      )}>
        {/* Logo */}
        <div className="p-6 flex items-center gap-2 mb-4">
          {logoConfig.icon}
          <div>
            {logoConfig.text && (
              <div className="font-bold text-lg leading-none">{logoConfig.text}</div>
            )}
            {logoConfig.subtext && (
              <div className="font-bold text-xl leading-none">{logoConfig.subtext}</div>
            )}
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar px-2">
          <div className="mb-2 px-2 py-1 text-xs font-semibold text-gray-400 uppercase">
            転職アカウント
          </div>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={item.active}
              badge={item.badge}
              onClick={item.onClick}
            />
          ))}
        </nav>
  
        {/* Footer */}
        <div className="border-t border-gray-700 mt-4 pt-4 pb-6 px-2">
          {footerItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 mt-auto pt-4 pb-6 mb-4 px-2">
          {bottomItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
