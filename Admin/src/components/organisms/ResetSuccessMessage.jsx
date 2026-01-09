import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Button from '../atoms/Button'
import Check from '../../assets/auth/check-circle.svg'

const ResetSuccessMessage = () => {
  return (
    <div className="w-full text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-custom mb-8">
        <img src={Check} alt="" className='' />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">新しいパスワードが正常に変更されました。</h2>
      <p className="text-gray-500 text-[16px] mb-8">
新しいパスワードが正常に変更されました。  メールアドレスとパスワードで再度ログインできます。      </p>

      <Link to="/login">
        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]">
          Back to Login
        </Button>
      </Link>
    </div>
  )
}

export default ResetSuccessMessage
