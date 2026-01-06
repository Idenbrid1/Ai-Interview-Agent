import React from 'react'
import Card from '../atoms/Card'
import { Users, FileText } from 'lucide-react'

const FunnelStep = ({ label, color }) => (
   <div 
    className={`flex items-center justify-center text-white text-xs font-medium h-full ${color}`}
    style={{ minWidth: '80px', clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)', margin: '0 -10px', padding: '0 20px', zIndex: 1 }}
   >
      {label}
   </div>
)

const FunnelSection = () => {
  return (
    <Card className="border-blue-400 border-2">
      <div className="mb-4 border-b border-gray-200 pb-2">
         <h3 className="font-bold text-lg text-gray-800">ファネル分析</h3>
         <p className="text-xs text-gray-500">ユーザーに関すること分析を表示することができます</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Visual Funnel Representation */}
        <div className="flex-1 flex items-center h-64 relative px-4" >
             <div className="w-1/5 h-full bg-[#5b8bd9] flex items-center justify-center text-white font-bold" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)'}}>認知</div>
             <div className="w-1/5 h-[90%] bg-[#1e2538] flex items-center justify-center text-white font-bold ml-1" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)'}}>興味・関心</div>
             <div className="w-1/5 h-[80%] bg-[#1e2538] flex items-center justify-center text-white font-bold ml-1" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)'}}>情報収集</div>
             <div className="w-1/5 h-[70%] bg-[#1e2538] flex items-center justify-center text-white font-bold ml-1" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)'}}>比較検討</div>
             <div className="w-1/5 h-[60%] bg-[#1e2538] flex items-center justify-center text-white font-bold ml-1" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)'}}>購買</div>
        </div>

        {/* Detailed Stats Panel */}
        <div className="w-full lg:w-80 bg-blue-50/50 p-4 border-l border-blue-200 border-dashed">
            <div className="mb-2 font-bold text-gray-800">選択 : {'{認知}'}</div>
            
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100 mb-3 flex justify-between items-center">
               <div>
                  <div className="text-xs text-gray-500">ユーザー数</div>
                  <div className="text-lg font-bold text-blue-900">100人</div>
                  <div className="text-xs text-teal-500 mt-1">↗ 選択ファネル</div>
               </div>
               <div className="p-2 bg-blue-900 text-white rounded">
                  <Users size={20} />
               </div>
            </div>

            <div className="bg-white p-3 rounded shadow-sm border border-gray-100 mb-4 flex justify-between items-center">
               <div>
                  <div className="text-xs text-gray-500">離脱率</div>
                  <div className="text-lg font-bold text-blue-900">50%</div>
                   <div className="text-xs text-teal-500 mt-1">↗ 対前ファネル比較</div>
               </div>
               <div className="p-2 bg-blue-900 text-white rounded">
                  <FileText size={20} />
               </div>
            </div>

            <button className="w-full bg-[#1e2538] text-white py-2 rounded text-sm hover:bg-gray-800 transition-colors">
               ユーザー確認
            </button>
        </div>
      </div>
    </Card>
  )
}

export default FunnelSection
