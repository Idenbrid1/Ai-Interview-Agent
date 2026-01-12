import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, CheckCircle } from 'lucide-react'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import MailIcon from '../../assets/auth/mail.svg'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password, rememberMe })
    // Handle login logic here
    navigate('/dashboard')
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-custom mb-8">
          <img src={MailIcon} className="w-7 h-7 " />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">ログインページ</h2>
        <p className="text-gray-500 text-[16px]">下記よりログイン情報をご入力ください</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />

        <InputGroup
          label="パスワード"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      
        />

        <div className='text-left cursor-pointer text-sm text-primary-color'>
          <a href="/forgot-password" className='underline'>パスワードをお忘れの場合</a>
        </div>


        <Button 
          variant="dark" 
          fullWidth 
          onClick={handleSubmit}
          type="submit"
        >
          ログイン
        </Button>

         <div className='text-center  cursor-pointer text-sm  text-primary-color'>
          <a href="/forgot-password">アカウントをお持ちでない方は？ 会員登録</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
