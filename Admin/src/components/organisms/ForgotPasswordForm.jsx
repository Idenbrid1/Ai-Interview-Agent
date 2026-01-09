import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import MailIcon from '../../assets/auth/mail.svg'
import BackArrow from '../../assets/auth/backarrow.svg'

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
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-custom mb-8">
          <img src={MailIcon} className="w-7 h-7 " />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">パスワードリセット</h2>
        <p className="text-gray-500 text-[16px]">登録されたメールアドレスを入力してください</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]" onClick={handleSubmit}>
          リセットリンクを送信
        </Button>

        <div className='text-center cursor-pointer text-sm text-primary-color'>
          <Link to="/login" className='inline-flex items-center gap-2'><img src={BackArrow} alt="" /> ログインページに戻る</Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPasswordForm
