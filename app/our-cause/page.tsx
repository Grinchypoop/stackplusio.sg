import Footer from '@/components/Footer'

export default function OurCause() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 sm:mb-8 text-center">
          Our Cause
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          What we stand for and believe in
        </p>

        {/* Our Cause content will go here */}
        <div className="text-center text-gray-600 py-12 sm:py-16 md:py-20 text-sm sm:text-base">
          Our Cause content coming soon...
        </div>
      </div>

      <Footer />
    </div>
  )
}
