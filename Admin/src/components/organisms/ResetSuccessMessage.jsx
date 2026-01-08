import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Button from '../atoms/Button'

const ResetSuccessMessage = () => {
  return (
    <div className="w-full text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Password Reset Successfully</h2>
      <p className="text-gray-500 mb-8">
        Your password has been successfully reset. You can now use your new password to login.
      </p>

      <Link to="/login">
        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]">
          Back to Login
        </Button>
      </Link>
    </div>
  )
}

export default ResetSuccessMessage
