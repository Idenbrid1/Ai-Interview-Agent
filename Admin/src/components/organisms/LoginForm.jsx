import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, CheckCircle } from 'lucide-react'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'

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
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Login Page</h2>
        <p className="text-gray-500 mt-2">Enter your login details below.</p>
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

        <InputGroup
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <Button className="w-full bg-[#2d3e50] hover:bg-[#1a2530]" onClick={handleSubmit}>
          Login
        </Button>

        <div className="text-center">
          <Link to="/forgot-password" class="text-sm text-blue-600 hover:text-blue-800">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
