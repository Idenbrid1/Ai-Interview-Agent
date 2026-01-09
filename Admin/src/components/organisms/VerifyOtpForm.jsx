import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, ShieldCheck, Lock } from 'lucide-react'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const inputRefs = useRef([])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Verify OTP and Reset Password:', { otp: otp.join(''), newPassword })
    navigate('/reset-success')
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-custom mb-8">
          <Mail className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">メール確認</h2>
        <p className="text-gray-500 text-[16px]">メールに送信された確認コードを入力してください</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-20 h-20 text-center text-xl font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <InputGroup
          label="New Password"
          type="password"
          placeholder="••••••••"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <InputGroup
          label="Confirm New Password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]" onClick={handleSubmit}>
          Reset Password
        </Button>

        <div className="text-center">
            <p className="text-sm text-primary-color">
                メールが届いていない場合 <button type="button" className="text-[#162445] font-normal  underline cursor-pointer">こちらより再送する</button>
            </p>
        </div>
      </form>
    </div>
  )
}

export default VerifyOtpForm
