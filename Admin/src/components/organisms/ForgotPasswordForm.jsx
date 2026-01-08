import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Forgot Password:', { email })
    // Simulate API call then navigate
    navigate('/verify-otp')
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Password Reset</h2>
        <p className="text-gray-500 mt-2">Enter the email address you use.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
        />

        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]" onClick={handleSubmit}>
          Reset Password
        </Button>

        <div className="text-center">
          <Link to="/login" className="text-sm text-blue-600 hover:text-blue-800">
            Back to Login Page
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPasswordForm
