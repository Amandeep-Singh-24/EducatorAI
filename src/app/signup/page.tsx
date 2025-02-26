"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Mail, Lock, User, Building, BookOpen, School } from 'lucide-react'

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    institution: "",
    institutionType: "",
    subjects: [] as string[],
    gradeLevel: "",
    challenges: [] as string[]
  })
  
  const [showPassword, setShowPassword] = useState(false)
  
  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  const handleSubjectToggle = (subject: string) => {
    if (formData.subjects.includes(subject)) {
      updateFormData('subjects', formData.subjects.filter(s => s !== subject))
    } else {
      updateFormData('subjects', [...formData.subjects, subject])
    }
  }
  
  const handleChallengeToggle = (challenge: string) => {
    if (formData.challenges.includes(challenge)) {
      updateFormData('challenges', formData.challenges.filter(c => c !== challenge))
    } else {
      updateFormData('challenges', [...formData.challenges, challenge])
    }
  }
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup data:", formData)
  }
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Create your account</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="block w-full px-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-gray-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long and include a number and special character.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or sign up with</span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Your role</h2>
            <p className="text-gray-400 text-center">Tell us about your role in education</p>
            
            <div className="grid grid-cols-1 gap-3">
              {["Teacher", "Administrator", "IT Staff", "School Counselor", "Other"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => updateFormData('role', role)}
                  className={`flex items-center justify-between p-4 border ${
                    formData.role === role ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-800/50'
                  } rounded-lg hover:bg-gray-800 transition-colors`}
                >
                  <span>{role}</span>
                  {formData.role === role && <Check className="h-5 w-5 text-purple-500" />}
                </button>
              ))}
            </div>
            
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center py-3 px-6 border border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.role}
                className={`flex items-center justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${
                  formData.role ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Educational institution</h2>
            <p className="text-gray-400 text-center">Tell us about where you teach</p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="institution" className="block text-sm font-medium text-gray-300">
                  Institution Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={(e) => updateFormData('institution', e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="School or University Name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Institution Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {["K-12", "Higher Education", "Online Learning", "Corporate Training", "Other"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateFormData('institutionType', type)}
                      className={`p-3 border ${
                        formData.institutionType === type ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-800/50'
                      } rounded-lg hover:bg-gray-800 transition-colors text-sm`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Subject Areas</label>
                <p className="text-xs text-gray-500">Select all that apply</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Mathematics", 
                    "Science", 
                    "Language Arts", 
                    "Social Studies", 
                    "Foreign Languages", 
                    "Computer Science",
                    "Arts",
                    "Physical Education"
                  ].map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => handleSubjectToggle(subject)}
                      className={`p-2 border ${
                        formData.subjects.includes(subject) ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-800/50'
                      } rounded-lg hover:bg-gray-800 transition-colors text-sm flex items-center justify-between`}
                    >
                      <span>{subject}</span>
                      {formData.subjects.includes(subject) && <Check className="h-4 w-4 text-purple-500" />}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-300">
                  Grade Level
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <School className="h-5 w-5 text-gray-500" />
                  </div>
                  
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={(e) => updateFormData('gradeLevel', e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select grade level</option>
                    <option value="Elementary">Elementary School</option>
                    <option value="Middle">Middle School</option>
                    <option value="High">High School</option>
                    <option value="College">College/University</option>
                    <option value="Adult">Adult Education</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center py-3 px-6 border border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.institutionType}
                className={`flex items-center justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${
                  formData.institutionType ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Your challenges</h2>
            <p className="text-gray-400 text-center">What are you looking to solve with EducatorAI?</p>
            
            <div className="space-y-3">
              {[
                "Managing student behavior in virtual classrooms",
                "Tracking student participation and engagement",
                "Organizing breakout rooms efficiently",
                "Answering repetitive student questions",
                "Creating and managing polls/quizzes",
                "Monitoring student progress",
                "Providing personalized feedback at scale",
                "Other"
              ].map((challenge) => (
                <button
                  key={challenge}
                  type="button"
                  onClick={() => handleChallengeToggle(challenge)}
                  className={`flex items-center justify-between w-full p-4 border ${
                    formData.challenges.includes(challenge) ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 bg-gray-800/50'
                  } rounded-lg hover:bg-gray-800 transition-colors text-left`}
                >
                  <span>{challenge}</span>
                  {formData.challenges.includes(challenge) && <Check className="h-5 w-5 text-purple-500" />}
                </button>
              ))}
            </div>
            
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center py-3 px-6 border border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={formData.challenges.length === 0}
                className={`flex items-center justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${
                  formData.challenges.length > 0 ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
              >
                Complete Sign Up
                <Check className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          
          <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-center">
                Join EducatorAI
              </h1>
              
              {/* Progress bar */}
              <div className="mt-8 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-purple-400">Step {currentStep} of {totalSteps}</span>
                  <span className="text-xs font-medium text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out" 
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
            
            {currentStep === 1 && (
              <div className="mt-8 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}