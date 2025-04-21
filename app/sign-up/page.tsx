"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUserPlus,
  FaLock,
  FaUser,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('Registering with:', { name, email, password });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const socialProviders = [
    { id: 'google', name: 'Google', icon: <FaGoogle className="text-[#DB4437]" />, bg: 'hover:bg-[#DB4437]/10' },
    { id: 'github', name: 'GitHub', icon: <FaGithub className="text-[#333]" />, bg: 'hover:bg-[#333]/10' },
    { id: 'twitter', name: 'Twitter', icon: <FaTwitter className="text-[#1DA1F2]" />, bg: 'hover:bg-[#1DA1F2]/10' },
    { id: 'facebook', name: 'Facebook', icon: <FaFacebook className="text-[#4267B2]" />, bg: 'hover:bg-[#4267B2]/10' },
    { id: 'linkedin', name: 'LinkedIn', icon: <FaLinkedin className="text-[#0077B5]" />, bg: 'hover:bg-[#0077B5]/10' },
  ];

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-green-400 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
          <p className="text-gray-400 mb-6">Your account has been created successfully.</p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg"
          >
            Proceed to Login <FaArrowRight />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-400">Join us today! It takes less than a minute</p>
          </div>

          {/* Social Register Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {socialProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => signIn(provider.id)}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 transition-all ${provider.bg} hover:border-transparent hover:shadow-lg`}
              >
                {provider.icon}
                <span className="text-sm">{provider.name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-900 text-sm text-gray-400">OR REGISTER WITH EMAIL</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                  min-length="8"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                  min-length="8"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-purple-600 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:from-purple-700 hover:to-pink-700 ${isLoading ? 'opacity-70' : 'hover:shadow-lg'}`}
            >
              {isLoading ? (
                'Creating account...'
              ) : (
                <>
                  <FaUserPlus />
                  Create Account
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium group">
              Sign in <FaArrowRight className="inline ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}