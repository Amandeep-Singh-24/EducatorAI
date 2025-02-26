"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              EducatorAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              About
            </Link>
            <div className="ml-4 flex items-center space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 rounded-full border border-purple-600 text-purple-400 hover:bg-purple-900/30 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 pb-2 border-t border-gray-800 flex flex-col space-y-2">
              <Link
                href="/login"
                className="px-4 py-2 text-center rounded-full border border-purple-600 text-purple-400 hover:bg-purple-900/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
