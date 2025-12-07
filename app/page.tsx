'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [animateBreak, setAnimateBreak] = useState(false)

  useEffect(() => {
    // Set mounted to true on client side
    setMounted(true)

    // Hide header and footer on homepage
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const main = document.querySelector('main')

    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'
    if (main) {
      main.style.margin = '0'
      main.style.padding = '0'
    }

    // Trigger the break animation after 2 seconds
    const breakTimer = setTimeout(() => {
      setAnimateBreak(true)
    }, 2000)

    // Hide splash screen after animation completes
    const hideTimer = setTimeout(() => {
      setShowSplash(false)
    }, 3500)

    // Cleanup - show them again when leaving the page
    return () => {
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
      if (main) {
        main.style.margin = ''
        main.style.padding = ''
      }
      clearTimeout(breakTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0" style={{ backgroundColor: '#000000' }}>
      {/* Animated Splash Screen */}
      {mounted && showSplash && (
        <>
          <style jsx>{`
            @keyframes shatter {
              0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: var(--tx) var(--ty) rotate(var(--rotation));
                opacity: 0;
              }
            }

            @keyframes growText {
              0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3);
              }
              50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2);
              }
              100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }

            .splash-container {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              grid-template-rows: repeat(4, 1fr);
              background: white;
            }

            .splash-piece {
              background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
              border: 1px solid rgba(0, 0, 0, 0.05);
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .splash-piece.animate {
              animation: shatter 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            }

            .splash-text {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 10000;
              text-align: center;
              animation: growText 1.5s ease-out forwards;
            }

            .splash-text.fade-out {
              animation: fadeOutWithBreak 1.5s ease-out forwards;
            }

            @keyframes fadeOutWithBreak {
              0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
              100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.5);
              }
            }

            .gradient-text-splash {
              background: linear-gradient(-45deg, #f89b29, #ff0f7b);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              font-size: 3.5rem;
              font-weight: 800;
              line-height: 1.2;
            }

            @media (max-width: 768px) {
              .splash-container {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
              }
              .gradient-text-splash {
                font-size: 1.5rem;
              }
            }

            @media (max-width: 480px) {
              .gradient-text-splash {
                font-size: 1.2rem;
              }
            }
          `}</style>

          <div className={`splash-text ${animateBreak ? 'fade-out' : ''}`}>
            <h1 className="gradient-text-splash" style={{ whiteSpace: 'nowrap' }}>
              Get A Fullstack Developer<br />At 599
            </h1>
          </div>

          <div className="splash-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`splash-piece ${animateBreak ? 'animate' : ''}`}
                style={{
                  '--tx': `translateX(${(Math.random() - 0.5) * 2000}px)`,
                  '--ty': `translateY(${(Math.random() - 0.5) * 2000}px)`,
                  '--rotation': `${(Math.random() - 0.5) * 720}deg`,
                  animationDelay: `${i * 0.05}s`
                } as React.CSSProperties}
              />
            ))}
          </div>
        </>
      )}

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-8 flex items-center justify-end">
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <a href="/discover" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Services</a>
            <a href="/portfolio" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Portfolio</a>
            <a href="/our-cause" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Our Cause</a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <Image
              src="/logo-black.png"
              alt="StackPlus Logo"
              width={600}
              height={200}
              className="h-32 sm:h-40 md:h-48 lg:h-64 w-auto"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            Building teams that build the future
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light mb-8 sm:mb-10 md:mb-12 px-4">
            We connect startups with exceptional developers: on demand, fully integrated, and ready to ship from day one.
          </p>
          <Link href="/discover">
            <button className="btn" style={{ position: 'relative', zIndex: 10 }}>Let's Roll →</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
