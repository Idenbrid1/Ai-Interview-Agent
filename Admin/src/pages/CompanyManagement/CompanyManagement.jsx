import React, { useState } from 'react'
import DashboardLayout from '../../components/templates/DashboardLayout'
import CompanyManagementTable from '../../components/organisms/CompanyManagementTable'
import SearchBar from '../../components/molecules/SearchBar'
import SortDropdown from '../../components/molecules/SortDropdown'
import Button from '../../components/atoms/Button'
import { Upload } from 'lucide-react'

function CompanyManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Sample data - in a real app, this would come from an API
  const [jobs] = useState([
    {
      id: '123456',
      companyName: 'Sony株式会社',
      jobTitle: '法人営業',
      positionName: '役職なし',
      recruiter: '鈴木太郎',
      employmentType: '正社員',
      workLocation: '東京本社',
      applicationEndDate: '2025/10/22',
      status: '募集中',
      salaryMin: '400万円',
      salaryMax: '750万円',
    },
    {
      id: '654123',
      companyName: 'Lenovo株式会社',
      jobTitle: '法人営業',
      positionName: '役職なし',
      recruiter: '鈴木太郎',
      employmentType: '契約社員',
      workLocation: '東京本社',
      applicationEndDate: '2025/10/22',
      status: '募集終了',
      salaryMin: '400万円',
      salaryMax: '750万円',
    },
    {
      id: '123456',
      companyName: '日立製作所株式会社',
      jobTitle: '法人営業',
      positionName: '役職なし',
      recruiter: '鈴木太郎',
      employmentType: '有期雇用社員',
      workLocation: '東京本社',
      applicationEndDate: '2025/10/22',
      status: '募集中',
      salaryMin: '400万円',
      salaryMax: '750万円',
    },
    {
      id: '654123',
      companyName: '日本航空株式会社',
      jobTitle: '法人営業',
      positionName: '役職なし',
      recruiter: '鈴木太郎',
      employmentType: '正社員',
      workLocation: '東京本社',
      applicationEndDate: '2025/10/22',
      status: '募集終了',
      salaryMin: '400万円',
      salaryMax: '750万円',
    },
  ])

  const handleCSVUpload = () => {
    // Handle CSV upload logic
    console.log('CSV upload clicked')
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">会社・求人管理</h1>
            <p className="text-xs text-gray-500">
              本プラットフォームにて取り扱っている求人を閲覧することができるページ
            </p>
          </div>
          <Button 
            onClick={handleCSVUpload}
            variant="dark"
            className="flex items-center gap-2"
          >
            <Upload size={18} />
            CSVをアップロード
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              並び順
            </label>
            <SortDropdown 
              value={sortOrder}
              onChange={setSortOrder}
            />
          </div>
          <div className="flex-1">
            <SearchBar 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Q ユーザー名にて検索"
            />
          </div>
        </div>

        <CompanyManagementTable 
          jobs={jobs}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </DashboardLayout>
  )
}

export default CompanyManagement
