'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition text-sm lg:text-base">
              About Us
            </Link>
            <Link href="/discover" className="text-gray-700 hover:text-primary-600 transition text-sm lg:text-base">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 transition text-sm lg:text-base">
              Portfolio
            </Link>
            <Link href="/our-cause" className="text-gray-700 hover:text-primary-600 transition text-sm lg:text-base">
              Our Cause
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition py-3 px-2 text-base min-h-[44px] flex items-center" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/discover" className="text-gray-700 hover:text-primary-600 transition py-3 px-2 text-base min-h-[44px] flex items-center" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 transition py-3 px-2 text-base min-h-[44px] flex items-center" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/our-cause" className="text-gray-700 hover:text-primary-600 transition py-3 px-2 text-base min-h-[44px] flex items-center" onClick={() => setIsMenuOpen(false)}>
                Our Cause
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
