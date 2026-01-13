import React from 'react'
import Badge from '../atoms/Badge'
import { Eye } from 'lucide-react'

const CompanyManagementTable = ({ jobs, currentPage, onPageChange, itemsPerPage = 10 }) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedJobs = jobs.slice(startIndex, endIndex)
  const totalPages = Math.ceil(jobs.length / itemsPerPage)

  const getStatusVariant = (status) => {
    return status === '募集中' ? 'orange' : 'default'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                求人ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                会社名
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                求人タイトル
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                役職名
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                本求人担当者
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                雇用形態
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                勤務地
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                採用終了日
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                ステータス
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                給与(最小)
              </th>
              <th className="px-4 py-3 text-left text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                給与(最大)
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedJobs.map((job, index) => (
              <tr key={`${job.id}-${index}`} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.companyName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.jobTitle}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.positionName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.recruiter}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.employmentType}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.workLocation}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.applicationEndDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <Badge 
                    variant={getStatusVariant(job.status)}
                    className="bg-orange-100 text-orange-800"
                  >
                    {job.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.salaryMin}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {job.salaryMax}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <button 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="詳細を表示"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 flex items-center justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed bg-gray-50'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          &lt;前へ
        </button>
        <span className="px-4 py-2 text-sm text-gray-700">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed bg-gray-50'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          次へ&gt;
        </button>
      </div>
    </div>
  )
}

export default CompanyManagementTable
